"use client";

import * as React from "react";

import { content } from "@/lib/content/it";
import { AssetWithFallback } from "@/components/asset-with-fallback";

export function TrustBar() {
  const { eyebrow, clients } = content.trustBar;
  const doubled = [...clients, ...clients];

  return (
    <section
      className="relative border-y border-border/60 bg-secondary/40 py-12"
      aria-label="Clienti che usano Hotely"
    >
      <div className="container-tight">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
          {eyebrow}
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max gap-12 animate-marquee will-change-transform">
            {doubled.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex h-12 w-32 flex-shrink-0 items-center justify-center"
              >
                <AssetWithFallback
                  src={c.src}
                  alt={c.name}
                  width={120}
                  height={40}
                  className="max-h-10 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0"
                  fallbackClassName="h-10 w-24 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
