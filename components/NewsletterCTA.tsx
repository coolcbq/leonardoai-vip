"use client";

import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="rounded-2xl border border-[#D4A853]/20 bg-gradient-to-br from-[#D4A853]/5 to-[#B8942E]/5 p-8 text-center">
      <h3 className="text-xl font-bold text-[#FAFAFA]">
        Get Leonardo AI Tips in Your Inbox
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-[#888888]">
        Join our newsletter for weekly tutorials on prompt engineering, model tips, and AI image generation techniques.
      </p>

      {status === "success" ? (
        <div className="mt-6 rounded-lg bg-[#D4A853]/10 px-4 py-3 text-sm font-medium text-[#D4A853]">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="Enter your email"
            required
            className="flex-1 rounded-lg border border-[#262626] bg-[#141414] px-4 py-2.5 text-sm text-neutral-200 placeholder-[#555555] outline-none transition-colors focus:border-[#D4A853]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-[#D4A853] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#F5E6C8] disabled:opacity-60"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">{message}</p>
      )}

      <p className="mt-3 text-xs text-[#555555]">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
