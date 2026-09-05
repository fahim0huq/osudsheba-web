import { NextRequest, NextResponse } from 'next/server';
import { getBackendUrl } from '@/lib/backend';

export async function POST(req: NextRequest) {
  let backendUrl: string;
  try {
    backendUrl = getBackendUrl();
  } catch (configErr) {
    const message = configErr instanceof Error ? configErr.message : String(configErr);
    console.error('[/api/subscription/status] Configuration error:', message);
    return NextResponse.json(
      { success: false, valid: false, status: 'unknown', error: 'CONFIGURATION_ERROR', message: 'Backend URL not configured in production.' },
      { status: 500 }
    );
  }

  try {
    const cookieToken = req.cookies.get('osudsheba_download_token')?.value;
    let body: { phone?: string; downloadToken?: string } = {};
    try {
      body = await req.json();
    } catch {
      // Empty body is okay if checking cookie
    }

    const downloadToken = body.downloadToken || cookieToken;
    const phone = body.phone;

    const response = await fetch(`${backendUrl}/web-subscription/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        downloadToken,
        phone,
      }),
      cache: 'no-store',
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (err: unknown) {
    console.error(`[/api/subscription/status] Proxy error contacting ${backendUrl}:`, err);
    return NextResponse.json(
      { success: false, valid: false, status: 'unknown' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return POST(req);
}
