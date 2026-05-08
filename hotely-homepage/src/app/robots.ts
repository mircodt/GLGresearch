import type { MetadataRoute } from "next";

import { content } from "@/lib/content/it";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${content.meta.url}/sitemap.xml`,
    host: content.meta.url,
  };
}
