"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/tekne-turlari", label: "Tekne Turları" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md shadow-sm border-b border-navy-100";

  const logoColor =
    isHome && !scrolled ? "text-white" : "text-navy-900";

  const linkColor =
    isHome && !scrolled
      ? "text-white/90 hover:text-white"
      : "text-navy-700 hover:text-ocean-600";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                isHome && !scrolled
                  ? "bg-white/20 text-white"
                  : "bg-ocean-500 text-white"
              }`}
            >
              ST
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-base leading-tight transition-colors ${logoColor}`}>
                Sazak Teknesi
              </span>
              <span
                className={`text-xs leading-tight transition-colors ${
                  isHome && !scrolled ? "text-white/70" : "text-navy-400"
                }`}
              >
                Adrasan Tekne Turları
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active
                      ? isHome && !scrolled
                        ? "bg-white/20 text-white"
                        : "bg-ocean-50 text-ocean-600"
                      : linkColor
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:05383423380"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isHome && !scrolled ? "text-white/90 hover:text-white" : "text-navy-700 hover:text-ocean-600"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0538 342 33 80
            </a>
            <Link
              href="/iletisim"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                isHome && !scrolled
                  ? "bg-ocean-500 text-white hover:bg-ocean-600"
                  : "bg-ocean-500 text-white hover:bg-ocean-600"
              }`}
            >
              Rezervasyon
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isHome && !scrolled
                ? "text-white hover:bg-white/10"
                : "text-navy-700 hover:bg-navy-50"
            }`}
            aria-label="Menü"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-navy-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-ocean-50 text-ocean-600"
                    : "text-navy-700 hover:bg-navy-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-navy-100">
              <a
                href="tel:05383423380"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-navy-700"
              >
                <svg className="w-4 h-4 text-ocean-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                0538 342 33 80
              </a>
              <Link
                href="/iletisim"
                onClick={() => setMenuOpen(false)}
                className="block mx-4 mt-2 py-3 text-center bg-ocean-500 text-white font-semibold rounded-xl text-sm"
              >
                Rezervasyon Yap
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}