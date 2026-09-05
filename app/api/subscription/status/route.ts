import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = (process.env.BACKEND_API_URL || 'http://localhost:3000').replace(/\/$/, '');

export async function POST(req: NextRequest) {
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

    const response = await fetch(`${BACKEND_URL}/web-subscription/status`, {
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
    console.error('[/api/subscription/status] Proxy error:', err);
    return NextResponse.json(
      { success: false, valid: false, status: 'unknown' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return POST(req);
}
