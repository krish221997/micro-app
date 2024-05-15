import { IntegrationOS } from "@integrationos/node";
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
  const integrate = new IntegrationOS(
    process.env.INTEGRATIONOS_API_KEY as string
  );
  try {
    const body = await req.json();
    const { connectionKeys } = body;

    let finalResponse: unknown[] = [];

    for (const connectionKey of connectionKeys) {
      let response = await integrate.invoices(connectionKey).list();
    response.unified = response.unified.map((invoice) => {
        return {
            id: invoice.id,
            invoiceNumber: invoice.invoiceNumber,
            total: invoice.total,
            status: invoice.status,
            fullName: invoice.customer?.fullName || invoice.customer?.email
            };
        }
    );

        finalResponse = [...finalResponse, ...response.unified]
    }

    return NextResponse.json(finalResponse, {
      headers: corsHeaders,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Invalid request" },
      {
        status: 400,
        headers: corsHeaders,
      }
    );
  }
}
