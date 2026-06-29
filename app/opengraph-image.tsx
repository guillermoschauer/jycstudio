import { ImageResponse } from "next/og";

export const alt =
  "JYC Studio — Productos digitales para negocios reales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const IVORY = "#f3eee4";
const CHARCOAL = "#22201b";
const STONE = "#8c867a";
const INK = "#46423a";
const CHAMPAGNE = "#b79a68";

export default function OpengraphImage() {
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
          padding: "84px 90px",
        }}
      >
        {/* Overline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: STONE,
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{ width: 12, height: 12, borderRadius: 12, backgroundColor: CHAMPAGNE }}
          />
          Independent Product Studio
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 72,
              height: 4,
              backgroundColor: CHAMPAGNE,
              marginBottom: 36,
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              color: CHARCOAL,
              fontSize: 86,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 980,
            }}
          >
            Productos digitales para&nbsp;
            <span style={{ color: CHARCOAL, fontStyle: "italic" }}>
              negocios reales.
            </span>
          </div>
          <div
            style={{
              marginTop: 30,
              color: INK,
              fontSize: 30,
              maxWidth: 860,
              lineHeight: 1.4,
            }}
          >
            Sistemas, SaaS y experiencias web para ordenar operaciones,
            comunicar mejor y crecer.
          </div>
        </div>

        {/* Wordmark / footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: CHARCOAL,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            JYC&nbsp;
            <span style={{ fontStyle: "italic", textTransform: "none", letterSpacing: 0, fontSize: "1.5em" }}>
              Studio
            </span>
          </div>
          <div style={{ color: STONE, fontSize: 22, letterSpacing: 2 }}>
            www.jycstudio.com.ar
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
