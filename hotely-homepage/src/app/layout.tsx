import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { content } from "@/lib/content/it";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(content.meta.url),
  title: {
    default: content.meta.title,
    template: "%s — Hotely",
  },
  description: content.meta.description,
  applicationName: content.meta.siteName,
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: content.meta.locale,
    url: content.meta.url,
    siteName: content.meta.siteName,
    title: content.meta.title,
    description: content.meta.description,
    images: [{ url: content.meta.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
    images: [content.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
