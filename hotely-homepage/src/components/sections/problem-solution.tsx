"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

import { content } from "@/lib/content/it";
import { Reveal } from "@/components/reveal";

export function ProblemSolution() {
  const { eyebrow, h2, rows, cta } = content.problemSolution;

  return (
    <section
      className="section-padding bg-secondary/40"
      aria-labelledby="problem-solution-heading"
    >
      <div className="container-tight">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id="problem-solution-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            {h2}
          </h2>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
          <div className="hidden grid-cols-2 border-b border-border bg-secondary/60 md:grid">
            <div className="px-6 py-4 text-sm font-medium text-muted-foreground">
              Senza Hotely
            </div>
            <div className="border-l border-border px-6 py-4 text-sm font-medium text-primary">
              Con Hotely
            </div>
          </div>

          <ul className="divide-y divide-border">
            {rows.map((row, i) => (
              <li
                key={i}
                className="grid gap-3 p-6 md:grid-cols-2 md:gap-0 md:p-0"
              >
                <div className="flex items-start gap-3 md:p-6">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive"
                  >
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {row.problem}
                  </p>
                </div>
                <div className="flex items-start gap-3 border-l border-border bg-primary/[0.04] md:p-6">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {row.solution}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:gap-2.5"
            data-event="problem-solution-cta"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
