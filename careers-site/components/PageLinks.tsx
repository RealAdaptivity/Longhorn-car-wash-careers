import Link from "next/link";

const pages = [
  {
    href: "/benefits",
    title: "Benefits",
    description:
      "Competitive pay, flexible scheduling, career growth, free car washes, and more. See everything we offer our team.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/culture",
    title: "Our Culture",
    description:
      "Family-owned, Texas values, built on integrity. Learn what makes Longhorn a great place to work and grow.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function PageLinks() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group flex items-start gap-5 bg-white rounded-2xl p-7 border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: "#fee2e2", color: "#C62828" }}
              >
                {page.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-black mb-1 group-hover:text-red-700 transition-colors" style={{ color: "#1A1A1A" }}>
                  {page.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{page.description}</p>
              </div>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-red-400 transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
