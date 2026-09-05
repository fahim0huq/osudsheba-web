import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = (process.env.BACKEND_API_URL || 'http://localhost:3000').replace(/\/$/, '');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { referenceNo, reference_no, otp, phone } = body;

    const response = await fetch(`${BACKEND_URL}/web-subscription/otp/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        referenceNo: referenceNo || reference_no,
        otp,
        phone,
      }),
      cache: 'no-store',
    });

    const data = await response.json();

    if (response.ok && data.success && data.downloadToken) {
      const res = NextResponse.json(data, { status: 200 });
      // Set secure HTTP-only cookie with the download token
      res.cookies.set('osudsheba_download_token', data.downloadToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 24 * 60 * 60, // 24 hours
        path: '/',
      });
      return res;
    }

    return NextResponse.json(data, { status: response.status });
  } catch (err: unknown) {
    console.error('[/api/subscription/verify-otp] Proxy error:', err);
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
