"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { content } from "@/lib/content/it";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function FinalCTA() {
  const { eyebrow, h2Lines, body, ctaPrimary, ctaSecondary, bgVideo } =
    content.finalCta;

  return (
    <section
      className="relative isolate overflow-hidden py-24 md:py-32"
      aria-labelledby="final-cta-heading"
    >
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-gradient opacity-90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      <div className="container-tight">
        <Reveal className="mx-auto max-w-3xl text-center text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
            {eyebrow}
          </p>
          <h2
            id="final-cta-heading"
            className="mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
          >
            {h2Lines[0]}
            <br />
            <span className="text-white/85">{h2Lines[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/85 md:text-lg">
            {body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="xl"
              className="bg-white text-foreground hover:bg-white/90"
              data-event="final-cta-primary"
            >
              <Link href={ctaPrimary.href}>
                {ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10"
              data-event="final-cta-secondary"
            >
              <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
