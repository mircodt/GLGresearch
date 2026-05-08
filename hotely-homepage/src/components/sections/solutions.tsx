"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { content } from "@/lib/content/it";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { AssetWithFallback } from "@/components/asset-with-fallback";
import { cn } from "@/lib/utils";

export function Solutions() {
  const { eyebrow, h2, body, cards } = content.solutions;

  return (
    <section
      id="soluzioni"
      className="section-padding bg-secondary/40"
      aria-labelledby="solutions-heading"
    >
      <div className="container-tight">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id="solutions-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            {h2}
          </h2>
          <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06} className="h-full">
              <Card
                className={cn(
                  "group flex h-full flex-col overflow-hidden p-0 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10",
                  "featured" in card && card.featured
                    ? "border-primary/50 ring-1 ring-primary/20"
                    : ""
                )}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                  <AssetWithFallback
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackClassName="absolute inset-0"
                  />
                  {"featured" in card && card.featured ? (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur">
                      <Sparkles className="h-3 w-3" />
                      Nuovo
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.cta.href}
                    className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-primary transition-all group-hover:gap-2"
                    data-event={`solutions-${card.title}`}
                  >
                    {card.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
