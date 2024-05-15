"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useOpenAuthKitUx } from "@/hooks/ux/useOpenAuthKitUx";
import { ControlledConnectionsList } from "@/controlled-components/Settings/ControlledConnectionsList";

export default function Home() {
  const { trigger } = useOpenAuthKitUx();

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
            <span className="sr-only">IntegrationOS</span>
          </Link>
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Invoices
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
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
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Invoices
              </Link>
              
              
             
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto flex justify-between items-center w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
          <Button onClick={trigger} variant="outline" size="sm">
            Add connection
          </Button>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link href="#">General</Link>
            <Link href="#">Security</Link>
            <Link href="#" className="font-semibold text-primary">
              Integrations
            </Link>
            <Link href="#">Support</Link>
            <Link href="#">Organizations</Link>
            <Link href="#">Advanced</Link>
          </nav>
          <ControlledConnectionsList />
        </div>
      </main>
    </div>
  );
}