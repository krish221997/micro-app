// app/api/route.ts
import { AuthKitToken } from "@integrationos/authkit-node";
import { NextRequest, NextResponse } from "next/server";

 const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {



  const embedToken = new AuthKitToken(
    process.env.INTEGRATIONOS_API_KEY as string
  );
  const token = await embedToken.create({
    group: "krish's-group-13",
    label: "krish's-label-13",
  });



  return NextResponse.json(token, {
    headers: corsHeaders,
  });
}
