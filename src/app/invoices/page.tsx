"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Image from "next/image";
import { useEffect, useState } from "react";
import useListConnections from "@/hooks/useListConnections";
import { useListInvoices } from "@/hooks/ux/useListInvocies";

export default function Home() {
  const { data: connections, isLoading } = useListConnections();

  const { invoices, trigger } = useListInvoices();

  useEffect(() => {
    const getInvoices = async () => {
      if (!isLoading && connections) {
        trigger();
      }
    };

    getInvoices();
  }, [connections, isLoading]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Image
              src="/images/integrationos-icon.svg"
              alt="IntegrationOS"
              width="25"
              height="25"
            />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/invoices"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Invoices
          </Link>
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Settings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Image
                  src="/images/integrationos-icon.svg"
                  alt="IntegrationOS"
                  width="25"
                  height="25"
                />
                <span className="sr-only">IntegrationOS</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Invoices
              </Link>

              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto flex container items-center w-full justify-end">
          <Button onClick={trigger} variant="outline" size="sm">
            Refresh Data
          </Button>
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={invoices} />
        </div>
      </main>
    </div>
  );
}
