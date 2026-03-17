import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LeonardoAI.VIP - Leonardo AI Tutorials, Prompts & AI Art Guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #D4A853, #B8942E, #F5E6C8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 900,
              color: "#0a0a0a",
            }}
          >
            L
          </div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontSize: "64px",
                fontWeight: 800,
                background: "linear-gradient(90deg, #D4A853, #F5E6C8)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              LeonardoAI
            </span>
            <span
              style={{
                fontSize: "64px",
                fontWeight: 500,
                color: "#737373",
              }}
            >
              .VIP
            </span>
          </div>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#a3a3a3",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Leonardo AI Tutorials, Prompts & AI Art Guides
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "18px",
            color: "#737373",
          }}
        >
          leonardoai.vip
        </div>
      </div>
    ),
    { ...size }
  );
}
