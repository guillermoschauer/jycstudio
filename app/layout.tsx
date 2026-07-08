import type { Metadata, Viewport } from "next";
import { DM_Sans, Newsreader, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten voice for the hero's "día a día" paper notes.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const SEO_TITLE = "JYC Studio — Productos digitales para negocios reales";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SEO_TITLE,
    template: "%s — JYC Studio",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "estudio de producto",
    "product studio",
    "SaaS a medida",
    "desarrollo de software",
    "sistemas internos",
    "JYC Studio",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE.url,
    siteName: SITE.name,
    title: SEO_TITLE,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3eee4",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${newsreader.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
