import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white border-b border-gray-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{ backgroundColor: "#fee2e2", color: "#C62828", border: "1px solid #fca5a5" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Now Hiring in Justin, TX
        </div>

        <h1
          className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight"
          style={{ color: "#1A1A1A" }}
        >
          Build Your Career<br />
          <span style={{ color: "#C62828" }}>With Longhorn.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join our family-owned team and be part of something bigger —
          where hard work is rewarded and every person matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#positions"
            className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:opacity-90 active:scale-95 shadow-lg"
            style={{ backgroundColor: "#C62828" }}
          >
            View Open Positions
          </Link>
          <Link
            href="/#about"
            className="px-8 py-4 rounded-full font-bold text-lg transition-all border-2 text-gray-700 hover:bg-gray-50"
            style={{ borderColor: "#d1d5db" }}
          >
            Learn About Us
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { value: "100%", label: "Family Owned" },
            { value: "Justin, TX", label: "Proudly Local" },
            { value: "Full & Part", label: "Time Positions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black mb-1" style={{ color: "#1A1A1A" }}>
                {stat.value}
              </div>
              <div className="text-sm font-medium uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
