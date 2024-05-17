import { IntegrationOS } from "@integrationos/node";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS(req: NextRequest) {
  const response = NextResponse.json({}, { headers: corsHeaders });
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

export async function POST(req: NextRequest) {
  const integrate = new IntegrationOS(
    process.env.INTEGRATIONOS_API_KEY as string
  );
  try {
    const body = await req.json();

    const { connections } = body;

    let finalResponse: unknown[] = [];

    for (const connection of connections) {
      let response = await integrate.invoices(connection).list();

      response.unified = response.unified.map((invoice) => {
        return {
          ...invoice,
          connectionKey: connection,
        };
      });

      finalResponse = [...finalResponse, ...response.unified];
    }

    return NextResponse.json(finalResponse, {
      headers: corsHeaders,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Some error occurred" },
      {
        status: 400,
        headers: corsHeaders,
      }
    );
  }
}
