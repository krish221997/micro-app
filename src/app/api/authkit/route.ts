import { createRandomUUID } from "@/lib/utils";
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
  try {
    const embedToken = new AuthKitToken(
      process.env.INTEGRATIONOS_API_KEY as string
    );
    const token = await embedToken.create({
      group: `organizationId-${createRandomUUID()}`,
      label: `organizationName-${createRandomUUID()}`,
    });

    return NextResponse.json(token, {
      headers: corsHeaders,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Some error occurred" },
      {
        status: 400,
        headers: corsHeaders,
      }
    );
  }
}
