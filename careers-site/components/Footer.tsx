import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A1A" }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg"
                style={{ backgroundColor: "#C62828" }}
              >
                LH
              </div>
              <div>
                <span className="text-white font-bold text-base block">Longhorn Car Wash</span>
                <span className="text-xs text-gray-400">Justin, Texas</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Family-owned and operated. Proudly serving Justin, TX and the
              surrounding North Texas communities since day one.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/jobs", label: "Open Positions" },
                { href: "/benefits", label: "Benefits" },
                { href: "/culture", label: "Our Culture" },
                { href: "/#apply", label: "Apply Now" },
                { href: "https://www.longhorncarwashtx.com", label: "Main Website", external: true },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#C62828" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Justin, Texas
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#C62828" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a
                  href="https://www.longhorncarwashtx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  longhorncarwashtx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center text-xs text-gray-500"
          style={{ borderColor: "#3d2518" }}
        >
          © {new Date().getFullYear()} Longhorn Car Wash. All rights reserved. | Justin, TX
        </div>
      </div>
    </footer>
  );
}
