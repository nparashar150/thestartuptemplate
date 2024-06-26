import { NextRequest, NextResponse } from "next/server";
import { getTemplateConfig, saveTemplateConfig } from "../../../lib/db";

export async function POST(request: NextRequest) {
  const json = await request.json();
  const config = json?.config;
  const email = json?.email;

  if (!config) return NextResponse.json({ error: "Config is required" }, { status: 400 });
  if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

  const newConfig = await saveTemplateConfig(email, config);
  return NextResponse.json({ message: "Config saved", config: newConfig }, { status: 200 });
}

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email")
  const config_only = request.nextUrl.searchParams.get("config_only")
  if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 })
  const config= await getTemplateConfig(email);
  if (config_only) return NextResponse.json(config?.content, { status: 200 });
  return NextResponse.json({ ...config }, { status: 200 });
}
