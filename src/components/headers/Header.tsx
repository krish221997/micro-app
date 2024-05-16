import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { SheetTrigger, SheetContent, Sheet } from "../ui/sheet";
import Image from "next/image";
import Link from "next/link";

export const Header = ({active}: {active?: string}) => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image
            src="/images/icon.svg"
            alt="IntegrationOS"
            width="100"
            height="100"
          />
          <span className="sr-only">IntegrationOS</span>
        </Link>
        <Link
          href="/"
          className={`${active === "invoices" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
        >
          Invoices
        </Link>
        <Link
          href="/settings"
          className={`${active === "settings" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
        >
          Settings
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                src="/images/icon.svg"
                alt="IntegrationOS"
                width="100"
                height="100"
              />
              <span className="sr-only">IntegrationOS</span>
            </Link>
            <Link
              href="/"
              className={`${active === "invoices" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
            >
              Invoices
            </Link>

            <Link href="/settings" className={`${active === "settings" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}>
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
