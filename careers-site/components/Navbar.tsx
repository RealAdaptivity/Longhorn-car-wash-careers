"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "#1A1A1A" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg"
              style={{ backgroundColor: "#C62828" }}
            >
              LH
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-tight block">
                Longhorn Car Wash
              </span>
              <span className="text-xs leading-tight block text-gray-400">
                Careers
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Open Positions
            </Link>
            <Link
              href="/benefits"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Benefits
            </Link>
            <Link
              href="/culture"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Our Culture
            </Link>
            <Link
              href="/jobs"
              className="px-5 py-2 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#C62828" }}
            >
              View Jobs
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/jobs", label: "Open Positions" },
              { href: "/benefits", label: "Benefits" },
              { href: "/culture", label: "Our Culture" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-white py-2 px-2 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/jobs"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center px-5 py-2 rounded-full text-white font-semibold text-sm"
              style={{ backgroundColor: "#C62828" }}
            >
              View Jobs
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
