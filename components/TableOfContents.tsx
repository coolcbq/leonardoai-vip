"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TocItem[] = [];

    elements.forEach((el) => {
      if (!el.id) {
        el.id = el.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || "";
      }
      if (el.id) {
        items.push({
          id: el.id,
          text: el.textContent || "",
          level: el.tagName === "H2" ? 2 : 3,
        });
      }
    });

    const frame = window.requestAnimationFrame(() => setHeadings(items));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  }

  const tocList = (
    <ul className="space-y-1">
      {headings.map((h) => (
        <li key={h.id}>
          <button
            onClick={() => scrollTo(h.id)}
            className={`block w-full text-left text-sm transition-colors ${
              h.level === 3 ? "pl-4" : ""
            } ${
              activeId === h.id
                ? "font-medium text-[#D4A853]"
                : "text-[#555555] hover:text-neutral-300"
            }`}
          >
            {h.text}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop sidebar TOC */}
      <aside className="hidden xl:block">
        <div className="sticky top-24">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#888888]">
            Table of Contents
          </h4>
          {tocList}
        </div>
      </aside>

      {/* Mobile collapsible TOC */}
      <div className="mb-8 rounded-xl border border-[#262626] bg-[#141414] xl:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-neutral-300"
        >
          <span>Table of Contents</span>
          <svg
            viewBox="0 0 20 20"
            className={`h-4 w-4 fill-current text-[#555555] transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && <div className="border-t border-[#262626] px-4 py-3">{tocList}</div>}
      </div>
    </>
  );
}
