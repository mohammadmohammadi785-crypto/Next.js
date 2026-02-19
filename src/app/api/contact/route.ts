import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Form Data:", data);
  return NextResponse.json({ message: "Message received!" });
}
