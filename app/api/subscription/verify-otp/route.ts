import { NextRequest, NextResponse } from 'next/server';
import { getBackendUrl } from '@/lib/backend';

export async function POST(req: NextRequest) {
  let backendUrl: string;
  try {
    backendUrl = getBackendUrl();
  } catch (configErr) {
    const message = configErr instanceof Error ? configErr.message : String(configErr);
    console.error('[/api/subscription/verify-otp] Configuration error:', message);
    return NextResponse.json(
      { success: false, error: 'CONFIGURATION_ERROR', message: 'Backend URL not configured in production.' },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { referenceNo, reference_no, otp, phone } = body;

    if (!otp) {
      return NextResponse.json(
        { success: false, error: 'OTP_REQUIRED', message: 'Verification OTP code is required.' },
        { status: 400 }
      );
    }

    const response = await fetch(`${backendUrl}/web-subscription/otp/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        referenceNo: referenceNo || reference_no,
        otp: String(otp).trim(),
        phone,
      }),
      cache: 'no-store',
    });

    const data = await response.json();

    if (response.ok && data.success && data.downloadToken) {
      const res = NextResponse.json(data, { status: 200 });
      res.cookies.set('osudsheba_download_token', data.downloadToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 24 * 60 * 60,
        path: '/',
      });
      return res;
    }

    return NextResponse.json(data, { status: response.status });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error(`[/api/subscription/verify-otp] Proxy error contacting ${backendUrl}:`, errorMsg);
    return NextResponse.json(
      {
        success: false,
        error: 'BACKEND_UNAVAILABLE',
        message: 'Could not connect to subscription service. Please try again.',
      },
      { status: 502 }
    );
  }
}
