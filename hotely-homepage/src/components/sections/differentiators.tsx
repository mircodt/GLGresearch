"use client";

import * as React from "react";
import { Banknote, QrCode, Receipt, type LucideIcon } from "lucide-react";

import { content } from "@/lib/content/it";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { AssetWithFallback } from "@/components/asset-with-fallback";

const icons: Record<string, LucideIcon> = {
  Receipt,
  Banknote,
  QrCode,
};

export function Differentiators() {
  const { eyebrow, h2, cards, totem } = content.differentiators;

  return (
    <section
      className="section-padding"
      aria-labelledby="differentiators-heading"
    >
      <div className="container-tight">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id="differentiators-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            {h2}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = icons[card.icon] ?? Receipt;
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <Card className="group h-full p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <div className="mt-6 rounded-xl border border-border bg-secondary/50 p-4">
                    <div className="text-2xl font-semibold tracking-tight text-gradient">
                      {card.metric}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {card.metricLabel}
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16">
          <figure className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="relative aspect-[16/7] w-full">
              <AssetWithFallback
                src={totem.image}
                alt={totem.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
                fallbackClassName="absolute inset-0"
              />
            </div>
            <figcaption className="border-t border-border bg-secondary/40 px-6 py-3 text-center text-sm text-muted-foreground">
              {totem.caption}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
