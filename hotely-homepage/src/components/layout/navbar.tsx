"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { content } from "@/lib/content/it";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState<"IT" | "EN">("IT");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { links, login, cta, languages } = content.navbar;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/0"
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Hotely homepage"
          className="flex items-center gap-2"
        >
          <Logo className="h-7 w-auto" />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navigazione principale"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div
            className="flex items-center rounded-full border border-border bg-background/60 p-0.5 text-xs font-medium"
            role="group"
            aria-label="Seleziona lingua"
          >
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l as "IT" | "EN")}
                className={cn(
                  "rounded-full px-2.5 py-1 transition-colors",
                  lang === l
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          <ThemeToggle />

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-sm font-medium"
          >
            <Link href={login.href}>{login.label}</Link>
          </Button>
          <Button asChild variant="gradient" size="sm" data-event="nav-cta">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Apri menu"
                aria-expanded={open}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex h-full flex-col gap-6 pt-6">
                <Logo className="h-7 w-auto" />
                <nav
                  className="flex flex-col gap-1"
                  aria-label="Navigazione mobile"
                >
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-2 py-3 text-base font-medium transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2 pb-4">
                  <Button asChild variant="outline" size="lg">
                    <Link href={login.href} onClick={() => setOpen(false)}>
                      {login.label}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="gradient"
                    size="lg"
                    data-event="nav-cta-mobile"
                  >
                    <Link href={cta.href} onClick={() => setOpen(false)}>
                      {cta.label}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
