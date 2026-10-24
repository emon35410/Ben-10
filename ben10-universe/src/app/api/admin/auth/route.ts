import { NextRequest, NextResponse } from 'next/server';

const AUTHORIZED_EMAIL = (process.env.ADMIN_AUTHORIZED_EMAIL || 'mhhsan341@gmail.com').toLowerCase().trim();
const AUTHORIZED_PASSCODE = process.env.ADMIN_PASSCODE || process.env.ADMIN_SECRET_KEY || 'BEN10-PRIME-2026';
const COOKIE_NAME = 'ben10_admin_session';

// Simple token representation for demo environment
function generateToken(email: string): string {
  const payload = {
    email,
    role: 'admin',
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7 // 7 days
  };
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

function verifyToken(token: string): boolean {
  try {
    const raw = Buffer.from(token, 'base64').toString('utf-8');
    const data = JSON.parse(raw);
    if (!data.email || !data.exp) return false;
    if (data.email.toLowerCase().trim() !== AUTHORIZED_EMAIL) return false;
    if (Date.now() > data.exp) return false;
    return true;
  } catch {
    return false;
  }
}

// GET: Check current session
export async function GET(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    email: AUTHORIZED_EMAIL,
    role: 'High-Command Plumber Admin'
  });
}

// POST: Authenticate with Email + Passcode
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = (body.email || '').toLowerCase().trim();
    const passcode = (body.passcode || '').trim();

    // 1. Verify email and passcode with constant error response (prevents credential harvesting)
    if (email !== AUTHORIZED_EMAIL || passcode !== AUTHORIZED_PASSCODE) {
      return NextResponse.json({
        error: 'ACCESS DENIED: Invalid command credentials or unauthorized officer identity.'
      }, { status: 401 });
    }

    // 3. Issue session token
    const token = generateToken(AUTHORIZED_EMAIL);
    const response = NextResponse.json({
      success: true,
      email: AUTHORIZED_EMAIL,
      message: 'Plumber High-Command Clearance verified. Access granted.'
    });

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Malformed authentication request.' }, { status: 400 });
  }
}

// DELETE: Logout
export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully.' });
  response.cookies.delete(COOKIE_NAME);
  return response;
}
