import Link from "next/link";

import { content } from "@/lib/content/it";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  const { columns, copyright, poweredBy } = content.footer;

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight grid gap-12 py-16 md:grid-cols-3 md:gap-8">
        <div>
          <Logo className="h-7 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            La piattaforma AI dell'ospitalità italiana. Sviluppata in Italia da
            Aurora Technologies.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-tight flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>{copyright}</p>
          <p>
            Powered by{" "}
            <span className="font-medium text-foreground">{poweredBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
