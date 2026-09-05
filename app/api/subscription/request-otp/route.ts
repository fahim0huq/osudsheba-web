import { NextRequest, NextResponse } from 'next/server';
import { getBackendUrl } from '@/lib/backend';

export async function POST(req: NextRequest) {
  let backendUrl: string;
  try {
    backendUrl = getBackendUrl();
  } catch (configErr) {
    const message = configErr instanceof Error ? configErr.message : String(configErr);
    console.error('[/api/subscription/request-otp] Configuration error:', message);
    return NextResponse.json(
      { success: false, error: 'CONFIGURATION_ERROR', message: 'Backend URL not configured in production.' },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const rawPhone = body.phone;

    if (!rawPhone || typeof rawPhone !== 'string') {
      return NextResponse.json(
        { success: false, error: 'PHONE_REQUIRED', message: 'Mobile phone number is required.' },
        { status: 400 }
      );
    }

    // Normalize phone number
    const digits = rawPhone.replace(/\D/g, '');
    let phone = digits;
    if (phone.startsWith('880')) {
      phone = phone.substring(2);
    } else if (!phone.startsWith('0') && phone.length === 10) {
      phone = `0${phone}`;
    }

    if (phone.length !== 11 || (!phone.startsWith('018') && !phone.startsWith('016'))) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'UNSUPPORTED_OPERATOR', 
          message: 'Please provide an 11-digit Robi (018) or Airtel (016) mobile number.' 
        },
        { status: 400 }
      );
    }

    const response = await fetch(`${backendUrl}/web-subscription/otp/request`, {
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
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error(`[/api/subscription/request-otp] Proxy error contacting ${backendUrl}:`, errorMsg);
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
