"use client";
import { ControlledInvoiceTable } from "@/controlled-components/Invoices/ControlledInvoiceTable";
import { Header } from "@/components/headers/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header active="invoices" />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <ControlledInvoiceTable />
      </main>
    </div>
  );
}
