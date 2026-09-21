import { ImageResponse } from "next/og";
import { isotypeDataUri } from "@/lib/brand-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the carbon tile from the brand board, ivory mark. */
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
          backgroundColor: "#16140f",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={isotypeDataUri({ bar: "#f7f5ee" })} width={132} height={132} alt="" />
      </div>
    ),
    { ...size },
  );
}
