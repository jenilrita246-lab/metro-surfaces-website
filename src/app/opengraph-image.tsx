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
          background: "#0a0908",
          padding: 72,
          position: "relative",
        }}
      >
        {/* Maroon bloom */}
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: "#8b1a26",
            opacity: 0.28,
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
              background: "#b62a3b",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 58,
              top: 22,
              width: 58,
              height: 74,
              background: "#c9c6c2",
              opacity: 0.82,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#78716a",
              marginBottom: 26,
            }}
          >
            {site.descriptor}
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.05, color: "#ede8e1" }}>
            Beautiful Spaces,
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.05, color: "#b62a3b" }}>
            Beautiful Life
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
            borderTop: "1px solid rgba(237,232,225,0.16)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 12, fontSize: 30 }}>
            <span style={{ color: "#ede8e1" }}>metro</span>
            <span style={{ color: "#b62a3b" }}>SURFACES</span>
          </div>
          <div style={{ fontSize: 22, color: "#78716a" }}>
            Acrycore · Laminates · Louvers · Cane Wallpaper
          </div>
        </div>
      </div>
    ),
    size,
  );
}
