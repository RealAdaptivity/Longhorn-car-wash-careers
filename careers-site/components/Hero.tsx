import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center px-4"
      style={{ minHeight: "calc(100vh - 64px)", backgroundColor: "#fff" }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
        style={{ backgroundColor: "#fee2e2", color: "#C62828", border: "1px solid #fca5a5" }}
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Now Hiring in Justin, TX
      </div>

      {/* Headline */}
      <h1
        className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tight"
        style={{ color: "#1A1A1A" }}
      >
        Build Your Career
        <br />
        <span style={{ color: "#C62828" }}>With Longhorn.</span>
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-10 leading-relaxed">
        Join our family-owned team and be part of something bigger —
        where hard work is rewarded and every person matters.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <Link
          href="/jobs"
          className="px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90 active:scale-95 shadow-md"
          style={{ backgroundColor: "#C62828" }}
        >
          View Open Positions
        </Link>
        <Link
          href="/culture"
          className="px-8 py-4 rounded-full font-bold text-base transition-all border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Learn About Us
        </Link>
      </div>

      {/* Stats */}
      <div className="flex flex-row gap-12 justify-center border-t border-gray-100 pt-10">
        {[
          { value: "100%", label: "Family Owned" },
          { value: "Justin, TX", label: "Proudly Local" },
          { value: "Full & Part", label: "Time Positions" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-black mb-1" style={{ color: "#1A1A1A" }}>
              {stat.value}
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
