"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { ImageIcon } from "lucide-react";

import { asset, cn } from "@/lib/utils";

type AssetWithFallbackProps = Omit<ImageProps, "onError" | "src"> & {
  src: string;
  fallbackClassName?: string;
};

export function AssetWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
  ...rest
}: AssetWithFallbackProps) {
  const [errored, setErrored] = React.useState(false);

  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-transparent text-primary/40",
          fallbackClassName ?? className
        )}
      >
        <ImageIcon className="h-8 w-8" aria-hidden="true" />
      </div>
    );
  }

  return (
    <Image
      src={asset(src)}
      alt={alt}
      className={className}
      onError={() => {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(`[Hotely] Asset mancante: ${src}`);
        }
        setErrored(true);
      }}
      {...rest}
    />
  );
}
