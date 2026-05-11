"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { content } from "@/lib/content/it";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Omnichannel() {
  const { eyebrow, h2, body, tabs } = content.omnichannel;
  const [active, setActive] = React.useState<string>(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section
      className="section-padding"
      aria-labelledby="omnichannel-heading"
    >
      <div className="container-tight">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id="omnichannel-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            {h2}
          </h2>
          <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div
            role="tablist"
            aria-label="Canali Hotely"
            className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 p-1.5"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                aria-controls={`tabpanel-${t.id}`}
                id={`tab-${t.id}`}
                onClick={() => setActive(t.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  active === t.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`tabpanel-${activeTab.id}`}
            aria-labelledby={`tab-${activeTab.id}`}
            className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {activeTab.title}
              </h3>
              <p className="mt-4 text-base text-muted-foreground">
                {activeTab.description}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-border bg-card p-5 shadow-2xl shadow-primary/5">
                <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-xs font-medium text-muted-foreground">
                    {activeTab.label} · Hotely AI
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-2.5"
                  >
                    {activeTab.messages.map((m, i) => (
                      <li
                        key={i}
                        className={cn(
                          "flex",
                          m.from === "ai" ? "justify-start" : "justify-end"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                            m.from === "ai"
                              ? "rounded-bl-sm bg-secondary text-foreground"
                              : "rounded-br-sm bg-primary-gradient text-white"
                          )}
                        >
                          {m.text}
                        </div>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>

              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary-gradient opacity-10 blur-2xl"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
