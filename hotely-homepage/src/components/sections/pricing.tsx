"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

import { content } from "@/lib/content/it";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Pricing() {
  const { eyebrow, h2, body, cta, chart } = content.pricing;
  const max = Math.max(...chart.map((c) => c.value));

  return (
    <section
      id="pricing"
      className="section-padding"
      aria-labelledby="pricing-heading"
    >
      <div className="container-tight">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid gap-10 p-8 md:grid-cols-2 md:gap-12 md:p-14">
              <div className="flex flex-col justify-center">
                <p className="eyebrow">{eyebrow}</p>
                <h2
                  id="pricing-heading"
                  className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
                >
                  {h2}
                </h2>
                <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
                  {body}
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    variant="gradient"
                    data-event="pricing-cta"
                  >
                    <Link href={cta.href}>
                      {cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                  <TrendingUp className="h-3.5 w-3.5" />
                  ROI in 14 giorni
                </div>

                <div className="mt-6 flex h-48 items-end gap-3 md:h-56">
                  {chart.map((c, i) => {
                    const h = (c.value / max) * 100;
                    return (
                      <div
                        key={c.day}
                        className="flex flex-1 flex-col items-center gap-2"
                      >
                        <div className="relative w-full flex-1">
                          <div
                            className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-t-md bg-primary-gradient transition-all duration-700"
                            style={{
                              height: `${h}%`,
                              transitionDelay: `${i * 80}ms`,
                            }}
                          />
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground">
                          g{c.day}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-6 text-xs text-muted-foreground">
                  Crescita media del valore generato dai primi clienti Hotely
                  nei primi 14 giorni di utilizzo.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
