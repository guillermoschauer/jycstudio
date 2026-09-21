import { ImageResponse } from "next/og";
import { isotypeDataUri } from "@/lib/brand-mark";
import { SITE } from "@/lib/site";

export const alt = "Schauer Labs — Tecnología para resolver problemas reales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const IVORY = "#f7f5ee";
const CARBON = "#16140f";
const INK = "#33302a";
const MUTED = "#63706a";
const VERDE = "#2e6f5e";

/**
 * Satori cannot read the font `next/font` self-hosts, so the card fetches
 * Archivo itself. Requesting the CSS without a browser UA makes Google serve
 * TrueType (Satori cannot parse woff2). If the network is unavailable the card
 * still renders with the default face — degraded, never broken.
 */
async function archivoFonts() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;800",
      { headers: { "User-Agent": "Mozilla/4.0" } },
    ).then((r) => r.text());

    const urls = [...css.matchAll(/src:\s*url\((https:\/\/[^)]+)\)/g)].map((m) => m[1]);
    const weights = [300, 400, 800] as const;
    if (urls.length < weights.length) return undefined;

    return await Promise.all(
      weights.map(async (weight, i) => ({
        name: "Archivo",
        data: await fetch(urls[i]).then((r) => r.arrayBuffer()),
        style: "normal" as const,
        weight,
      })),
    );
  } catch {
    return undefined;
  }
}

/**
 * Social card — the brand board's left panel: ivory, one heavy statement,
 * one green rule, the lockup at the foot. No illustration, no gradient.
 */
export default async function OpengraphImage() {
  const fonts = await archivoFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: IVORY,
          padding: "80px 88px",
        }}
      >
        {/* Lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={isotypeDataUri({ bar: CARBON, dot: VERDE })} width={54} height={54} alt="" />
          <div style={{ display: "flex", alignItems: "baseline", color: CARBON, fontSize: 42 }}>
            <span style={{ fontWeight: 800, letterSpacing: -0.5 }}>SCHAUER</span>
            <span style={{ fontWeight: 300, marginLeft: 14, letterSpacing: 2 }}>LABS</span>
          </div>
        </div>

        {/* Statement */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: CARBON,
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 880,
            }}
          >
            Software e IA para resolver problemas reales.
          </div>
          <div
            style={{
              marginTop: 32,
              color: INK,
              fontSize: 26,
              maxWidth: 800,
              lineHeight: 1.5,
            }}
          >
            {SITE.proposition}
          </div>
        </div>

        {/* Foot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid #dedad0`,
            paddingTop: 26,
            color: MUTED,
            fontSize: 20,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Procesos · Tecnología · Resultados</div>
          <div style={{ display: "flex", letterSpacing: 2 }}>schauerlabs.com</div>
        </div>
      </div>
    ),
    { ...size, ...(fonts ? { fonts } : {}) },
  );
}
