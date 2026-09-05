import { NextRequest, NextResponse } from 'next/server';
import { getBackendUrl } from '@/lib/backend';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  let backendUrl: string;
  try {
    backendUrl = getBackendUrl();
  } catch (configErr) {
    const message = configErr instanceof Error ? configErr.message : String(configErr);
    console.error('[/api/subscription/download] Configuration error:', message);
    return NextResponse.redirect(new URL('/subscribe?error=config_error', req.url));
  }

  try {
    const cookieToken = req.cookies.get('osudsheba_download_token')?.value;
    const urlToken = req.nextUrl.searchParams.get('token');
    const phone = req.nextUrl.searchParams.get('phone');
    const token = urlToken || cookieToken;

    const checkUrl = new URL(`${backendUrl}/web-subscription/download-check`);
    if (token) checkUrl.searchParams.set('token', token);
    if (phone) checkUrl.searchParams.set('phone', phone);

    const checkRes = await fetch(checkUrl.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!checkRes.ok) {
      return NextResponse.redirect(new URL('/subscribe?error=subscription_required', req.url));
    }

    const configuredUrl = process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL || process.env.ANDROID_DOWNLOAD_URL;
    if (configuredUrl && configuredUrl.startsWith('http')) {
      return NextResponse.redirect(configuredUrl);
    }

    const localApkPath = path.resolve(process.cwd(), '..', 'osudsheba', 'build', 'app', 'outputs', 'flutter-apk', 'app-debug.apk');
    if (fs.existsSync(localApkPath)) {
      const fileBuffer = fs.readFileSync(localApkPath);
      const headers = new Headers();
      headers.set('Content-Disposition', 'attachment; filename="osudsheba.apk"');
      headers.set('Content-Type', 'application/vnd.android.package-archive');
      headers.set('Content-Length', fileBuffer.length.toString());

      return new NextResponse(fileBuffer, {
        status: 200,
        headers,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Subscription verified. Download package is being provisioned for production release.',
    });
  } catch (err: unknown) {
    console.error(`[/api/subscription/download] Download error contacting ${backendUrl}:`, err);
    return NextResponse.redirect(new URL('/subscribe?error=verification_failed', req.url));
  }
}
