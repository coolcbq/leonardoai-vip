"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot check - show fake success to bots
    if (formData.website) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-[#D4A853]/30 bg-[#D4A853]/10 p-8 text-center">
        <h3 className="text-xl font-semibold text-[#D4A853]">
          Message Sent Successfully!
        </h3>
        <p className="mt-2 text-neutral-400">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-[#D4A853] hover:text-[#F5E6C8]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot - hidden from users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) =>
            setFormData({ ...formData, website: e.target.value })
          }
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-neutral-300"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full rounded-lg border border-[#262626] bg-[#141414] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#555555] transition-colors focus:border-[#D4A853] focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-neutral-300"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-lg border border-[#262626] bg-[#141414] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#555555] transition-colors focus:border-[#D4A853] focus:outline-none"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="w-full rounded-lg border border-[#262626] bg-[#141414] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#555555] transition-colors focus:border-[#D4A853] focus:outline-none"
          placeholder="Tutorial request, feedback, partnership, etc."
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full rounded-lg border border-[#262626] bg-[#141414] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#555555] transition-colors focus:border-[#D4A853] focus:outline-none"
          placeholder="Tell us about your inquiry..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email support@leonardoai.vip
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-[#D4A853] px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#F5E6C8] disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
