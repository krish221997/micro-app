"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useOpenAuthKitUx } from "@/hooks/ux/useOpenAuthKitUx";
import { ControlledConnectionsList } from "@/controlled-components/Settings/ControlledConnectionsList";
import { Header } from "@/components/headers/Header";

export default function Settings() {
  const { trigger } = useOpenAuthKitUx();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header active="settings" />
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
