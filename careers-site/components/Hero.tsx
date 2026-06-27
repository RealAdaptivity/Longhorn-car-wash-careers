import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #C62828 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, #000000 0%, transparent 40%)`,
        }}
      />

      {/* Longhorn silhouette watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 400 300" width="600" height="450" fill="white">
          <path d="M200,80 C180,60 140,40 100,50 C60,60 30,80 20,110 C10,140 30,160 50,150 C40,170 45,190 60,185 C55,200 65,215 80,210 C85,230 100,235 115,225 C120,245 140,248 155,235 C160,255 180,258 195,245 C200,265 220,265 225,250 C240,260 258,255 260,238 C275,245 290,238 292,222 C310,228 320,218 318,202 C335,205 342,192 338,178 C352,178 356,163 350,152 C370,148 368,132 358,122 C375,112 368,95 355,92 C360,75 348,62 335,65 C332,48 318,42 305,50 C295,35 278,35 268,48 C255,35 238,38 230,52 C218,40 202,42 200,57 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{ backgroundColor: "rgba(198,40,40,0.2)", color: "#ffffff", border: "1px solid rgba(198,40,40,0.4)" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now Hiring in Justin, TX
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          Build Your Career<br />
          <span style={{ color: "#C62828" }}>With Longhorn.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
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
            className="px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/10 border-2 border-white/30 text-white"
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
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
