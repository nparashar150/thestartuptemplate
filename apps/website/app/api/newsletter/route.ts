import { NextRequest, NextResponse } from "next/server";
import { subscribeToNewsletter } from "../../../lib/db";

export async function POST(request: NextRequest) {
  const json = await request.json();
  const email = json?.email;
  if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });
  await subscribeToNewsletter(email);
  return NextResponse.json({ message: "Subscribed to newsletter" }, { status: 200 });
}
