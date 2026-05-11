"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Play, Quote, X } from "lucide-react";

import { content } from "@/lib/content/it";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { AssetWithFallback } from "@/components/asset-with-fallback";

type Testimonial = (typeof content.testimonials.items)[number];

function VideoModal({
  open,
  onOpenChange,
  src,
  name,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  src?: string;
  name: string;
}) {
  if (!src) return null;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <Dialog.Title className="sr-only">
            Testimonianza video di {name}
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            Riproduzione del video di {name}.
          </Dialog.Description>
          <video
            className="aspect-video w-full bg-black"
            controls
            autoPlay
            playsInline
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
          </video>
          <Dialog.Close asChild>
            <button
              aria-label="Chiudi video"
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur transition hover:bg-background"
            >
              <X className="h-4 w-4" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const [open, setOpen] = React.useState(false);
  const hasVideo = "video" in t && Boolean(t.video);

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Card className="flex h-full flex-col p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
        <div className="flex items-start justify-between gap-4">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-secondary">
            <AssetWithFallback
              src={t.image}
              alt={t.name}
              fill
              sizes="64px"
              className="object-cover"
              fallbackClassName="absolute inset-0"
            />
            {hasVideo ? (
              <button
                type="button"
                aria-label={`Riproduci video di ${t.name}`}
                onClick={() => setOpen(true)}
                className="absolute inset-0 grid place-items-center bg-black/30 text-white opacity-0 transition-opacity hover:opacity-100"
              >
                <Play className="h-5 w-5" fill="currentColor" />
              </button>
            ) : null}
          </div>
          <Quote
            aria-hidden="true"
            className="h-7 w-7 flex-shrink-0 text-primary/30"
          />
        </div>

        <p className="mt-6 flex-1 text-sm leading-relaxed text-foreground/85">
          “{t.quote}”
        </p>

        <footer className="mt-6 border-t border-border pt-4">
          <p className="font-medium tracking-tight">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </footer>
      </Card>
      {hasVideo ? (
        <VideoModal
          open={open}
          onOpenChange={setOpen}
          src={(t as { video?: string }).video}
          name={t.name}
        />
      ) : null}
    </Reveal>
  );
}

export function Testimonials() {
  const { eyebrow, h2, items } = content.testimonials;

  return (
    <section
      className="section-padding bg-secondary/40"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-tight">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            {h2}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
