"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import { content } from "@/lib/content/it";
import { asset } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();
  const { eyebrow, h1Lines, subtitle, ctaPrimary, ctaSecondary, microcopy, badges } =
    content.hero;

  return (
    <section
      className="relative isolate overflow-hidden pt-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={asset("/assets/hero/hero-image.jpg")}
          aria-hidden="true"
        >
          <source src={asset("/assets/hero/hero-video.webm")} type="video/webm" />
          <source src={asset("/assets/hero/hero-video.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.18),transparent_60%)]" />
      </div>

      <div className="container-tight relative flex flex-col items-center gap-8 py-20 text-center md:py-28 lg:py-36">
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm md:text-sm"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          id="hero-heading"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          {h1Lines[0]}{" "}
          <span className="text-gradient">{h1Lines[1]}</span> {h1Lines[2]}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-balance text-base text-muted-foreground md:text-lg"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="xl"
            variant="gradient"
            data-event="hero-cta-primary"
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
            data-event="hero-cta-secondary"
          >
            <Link href={ctaSecondary.href}>
              <PlayCircle className="h-4 w-4" />
              {ctaSecondary.label}
            </Link>
          </Button>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xs text-muted-foreground md:text-sm"
        >
          {microcopy}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          {badges.map((badge) => (
            <a
              key={badge.label}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.03]"
              aria-label={badge.alt}
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={140}
                height={42}
                className="h-10 w-auto"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
