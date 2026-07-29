import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

/** Social share card, generated at build time so it always matches the theme. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf7f3",
          padding: 72,
          position: "relative",
        }}
      >
        {/* Maroon bloom — a tint on paper, not a glow */}
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: "#8b1a26",
            opacity: 0.09,
          }}
        />

        {/* Brand mark */}
        <div style={{ display: "flex", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 14,
              top: 0,
              width: 56,
              height: 74,
              background: "#8b1a26",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 58,
              top: 22,
              width: 58,
              height: 74,
              background: "#b0a9a0",
              opacity: 0.85,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#857d75",
              marginBottom: 26,
            }}
          >
            {site.descriptor}
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.05, color: "#1c1918" }}>
            Beautiful Spaces,
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.05, color: "#8b1a26" }}>
            Beautiful Life
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
            borderTop: "1px solid rgba(28,25,24,0.16)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 12, fontSize: 30 }}>
            <span style={{ color: "#1c1918" }}>metro</span>
            <span style={{ color: "#8b1a26" }}>SURFACES</span>
          </div>
          <div style={{ fontSize: 22, color: "#857d75" }}>
            Acrycore · Laminates · Louvers · Cane Wallpaper
          </div>
        </div>
      </div>
    ),
    size,
  );
}
