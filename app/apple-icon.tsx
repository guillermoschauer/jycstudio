import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f3eee4",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#22201b",
            fontSize: 132,
            fontStyle: "italic",
            fontWeight: 500,
            // optical centering of the glyph
            marginTop: -8,
          }}
        >
          V
        </div>
      </div>
    ),
    { ...size },
  );
}
