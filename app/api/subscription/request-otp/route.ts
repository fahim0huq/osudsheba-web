import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = (process.env.BACKEND_API_URL || 'http://localhost:3000').replace(/\/$/, '');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const phone = body.phone;

    if (!phone) {
      return NextResponse.json(
        { success: false, error: 'PHONE_REQUIRED', message: 'Mobile phone number is required.' },
        { status: 400 }
      );
    }

    const response = await fetch(`${BACKEND_URL}/web-subscription/otp/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone }),
      cache: 'no-store',
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (err: unknown) {
    console.error('[/api/subscription/request-otp] Proxy error:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'BACKEND_UNAVAILABLE',
        message: 'Could not connect to subscription service. Please verify your connection or try again later.',
      },
      { status: 502 }
    );
  }
}
