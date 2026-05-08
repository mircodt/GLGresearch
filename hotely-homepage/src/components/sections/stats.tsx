"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";

import { content } from "@/lib/content/it";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

function CountUp({ value, prefix = "", suffix = "" }: Stat) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: "easeOut",
    });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, motionValue, rounded, value, reduce]);

  return (
    <span ref={ref} className="text-gradient">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { items } = content.stats;

  return (
    <section
      className="section-padding bg-background"
      aria-label="Risultati Hotely in numeri"
    >
      <div className="container-tight">
        <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-5xl font-semibold tracking-tight md:text-6xl">
                <CountUp {...item} />
              </dd>
              <p className="mx-auto mt-3 max-w-[18ch] text-sm text-muted-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
