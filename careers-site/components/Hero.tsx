import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-100 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center w-full">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{ backgroundColor: "#fee2e2", color: "#C62828", border: "1px solid #fca5a5" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Now Hiring in Justin, TX
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight tracking-tight" style={{ color: "#1A1A1A" }}>
          Build Your Career<br />
          <span style={{ color: "#C62828" }}>With Longhorn.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
          Join our family-owned team and be part of something bigger —
          where hard work is rewarded and every person matters.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14">
          <Link
            href="/jobs"
            className="w-full sm:w-auto px-7 py-3 rounded-full text-white font-bold text-base transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: "#C62828" }}
          >
            View Open Positions
          </Link>
          <Link
            href="/culture"
            className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-base transition-all border-2 text-gray-700 hover:bg-gray-50"
            style={{ borderColor: "#d1d5db" }}
          >
            Learn About Us
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto border-t border-gray-100 pt-10">
          {[
            { value: "100%", label: "Family Owned" },
            { value: "Justin, TX", label: "Proudly Local" },
            { value: "Full & Part", label: "Time Positions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl font-black mb-1" style={{ color: "#1A1A1A" }}>
                {stat.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
