"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { content } from "@/lib/content/it";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Setup() {
  const { eyebrow, h2, body, steps, cta } = content.setup;

  return (
    <section className="section-padding" aria-labelledby="setup-heading">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id="setup-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            {h2}
          </h2>
          <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <li className="relative h-full rounded-2xl border border-border bg-card p-7">
                <span
                  aria-hidden="true"
                  className="text-5xl font-semibold tracking-tight text-gradient"
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute right-7 top-7 hidden h-px w-12 bg-gradient-to-r from-primary/40 to-transparent md:block"
                  />
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="gradient" data-event="setup-cta">
            <Link href={cta.href}>
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
