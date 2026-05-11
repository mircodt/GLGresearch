"use client";

import * as React from "react";

import { content } from "@/lib/content/it";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";

export function FAQ() {
  const { h2, items } = content.faq;

  return (
    <section
      className="section-padding bg-secondary/40"
      aria-labelledby="faq-heading"
    >
      <div className="container-tight">
        <Reveal className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="text-balance text-center text-3xl font-semibold tracking-tight md:text-5xl"
          >
            {h2}
          </h2>

          <div className="mt-12 rounded-2xl border border-border bg-background px-6">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
