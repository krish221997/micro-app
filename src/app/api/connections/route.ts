import { api, domain } from "@/endpoints";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET() {
  try {
    const data = await api({
      method: "GET",
      url: `${domain}/connections?limit=100&skip=0`,
      headers: {
        "X-IntegrationOS-Secret": process.env.INTEGRATIONOS_API_KEY as string,
      },
    });

    return NextResponse.json(data, {
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
