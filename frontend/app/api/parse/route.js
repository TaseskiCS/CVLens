
// this `parse` route is a proxy to our backend api allowing users to freely use our api 
// within our controlled environment!
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const upstream = await fetch(`${process.env.BACKEND_URL}/upload`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await upstream.json();
  return NextResponse.json(data, { status: upstream.status });
}
