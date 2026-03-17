"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface SearchResult {
  title: string;
  slug: string;
  excerpt: string | null;
  category: string | null;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(value: string) {
    setQuery(value);
    if (timerRef.current) clearTimeout(timerRef.current);

    if (value.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    timerRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(value.trim())}`);
        const data = await res.json();
        setResults(data.results || []);
        setIsOpen(true);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);
  }

  function handleSelect() {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <svg
          viewBox="0 0 20 20"
          className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 fill-[#555555]"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder="Search tutorials..."
          className="w-full rounded-lg border border-[#262626] bg-[#141414] py-1.5 pl-8 pr-3 text-sm text-neutral-200 placeholder-[#555555] outline-none transition-colors focus:border-[#D4A853] md:w-48 lg:w-56"
        />
        {loading && (
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
            <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#262626] border-t-[#D4A853]" />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-[#262626] bg-[#141414] shadow-xl">
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto">
              {results.map((r) => (
                <li key={r.slug} className="border-b border-[#262626] last:border-0">
                  <Link
                    href={`/blog/${r.slug}`}
                    onClick={handleSelect}
                    className="block px-4 py-3 transition-colors hover:bg-[#1C1C1C]"
                  >
                    <p className="text-sm font-medium text-neutral-200 line-clamp-1">
                      {r.title}
                    </p>
                    {r.category && (
                      <span className="mt-1 inline-block text-xs text-[#D4A853]">
                        {r.category}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-6 text-center text-sm text-[#555555]">
              No tutorials found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
