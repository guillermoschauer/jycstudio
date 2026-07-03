import type { Metadata } from "next";
import {
  Archivo,
  Archivo_Black,
  Bodoni_Moda,
  Newsreader,
  JetBrains_Mono,
  DM_Sans,
} from "next/font/google";

/**
 * Scoped font stack for the concept gallery only.
 * These variables are attached to a wrapper <div>, so they never leak into
 * or alter the live marketing site.
 */
const archivo = Archivo({
  variable: "--c-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--c-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--c-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--c-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--c-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--c-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Concept Boards — 5 direcciones de diseño",
  description:
    "Cinco lenguajes de diseño radicalmente distintos para la home de JYC Studio.",
  robots: { index: false, follow: false },
};

export default function ConceptosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${archivo.variable} ${archivoBlack.variable} ${bodoni.variable} ${newsreader.variable} ${mono.variable} ${dmSans.variable}`}
    >
      {children}
    </div>
  );
}
