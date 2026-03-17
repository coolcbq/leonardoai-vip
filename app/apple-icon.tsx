import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          background: "linear-gradient(135deg, #D4A853 0%, #B8942E 100%)",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 90V30h8v52h40"
            stroke="#0A0A0A"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M85 75l-8 8M85 75l8 8"
            stroke="#0A0A0A"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="90" cy="35" r="5" fill="#0A0A0A" opacity="0.6" />
          <circle cx="75" cy="28" r="3" fill="#0A0A0A" opacity="0.4" />
          <circle cx="100" cy="45" r="3" fill="#0A0A0A" opacity="0.4" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
