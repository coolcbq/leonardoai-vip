"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchBar from "./SearchBar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#0A0A0A]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="text-xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#D4A853] to-[#F5E6C8] bg-clip-text text-transparent">
              LeonardoAI
            </span>
            <span className="text-[#555555] font-medium">.VIP</span>
          </span>
        </Link>

        {/* Desktop nav + search */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#D4A853]"
                      : "text-neutral-300 hover:text-[#F5E6C8]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SearchBar />
        </div>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-neutral-300 transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-neutral-300 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-neutral-300 transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="border-t border-[#262626] md:hidden">
          <div className="px-6 pt-4">
            <SearchBar />
          </div>
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[#D4A853]/10 text-[#D4A853]"
                      : "text-neutral-300 hover:bg-[#1C1C1C] hover:text-[#F5E6C8]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
