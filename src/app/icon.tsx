import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon: the brand's overlapping-panel motif reduced to two planes,
 * which is all that stays legible at 16px.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#faf7f3",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 10,
            top: 8,
            width: 26,
            height: 40,
            background: "#8b1a26",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 26,
            top: 18,
            width: 28,
            height: 40,
            background: "#b0a9a0",
            opacity: 0.85,
          }}
        />
      </div>
    ),
    size,
  );
}
