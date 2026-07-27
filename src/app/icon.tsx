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
          background: "#0a0908",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 10,
            top: 8,
            width: 26,
            height: 40,
            background: "#b62a3b",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 26,
            top: 18,
            width: 28,
            height: 40,
            background: "#c9c6c2",
            opacity: 0.82,
          }}
        />
      </div>
    ),
    size,
  );
}
