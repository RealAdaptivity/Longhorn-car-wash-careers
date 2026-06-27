const values = [
  {
    number: "01",
    title: "Do It Right",
    description:
      "We take pride in every car that comes through our tunnel. Quality isn't optional — it's the standard.",
  },
  {
    number: "02",
    title: "Serve with Heart",
    description:
      "Justin is our community. We treat every customer like a neighbor, because they are.",
  },
  {
    number: "03",
    title: "Grow Together",
    description:
      "When the business succeeds, our team succeeds. We invest in the people who make it happen.",
  },
  {
    number: "04",
    title: "Show Up",
    description:
      "Reliability and hustle are everything. Be on time, be present, and bring your best every shift.",
  },
];

export default function Culture() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#C62828" }}
            >
              Our Culture
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mt-2 mb-6"
              style={{ color: "#1A1A1A" }}
            >
              Built on Texas Values
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Longhorn Car Wash was started with one simple mission: deliver
              cleaner cars, faster service, and a better experience for every
              customer — without ever compromising on integrity.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              As a family-owned business in Justin, TX, we know every face in
              our community. That personal connection drives everything we do,
              including how we treat our team.
            </p>

            {/* Quote */}
            <blockquote
              className="relative pl-6 border-l-4 italic text-gray-700 text-lg"
              style={{ borderColor: "#C62828" }}
            >
              &ldquo;We don&apos;t just wash cars — we build relationships and we
              build careers. Our team is the heart of this business.&rdquo;
              <footer className="mt-3 not-italic text-sm font-semibold" style={{ color: "#C62828" }}>
                — Longhorn Car Wash Ownership
              </footer>
            </blockquote>
          </div>

          {/* Right: values */}
          <div className="space-y-6">
            {values.map((v) => (
              <div
                key={v.number}
                className="flex gap-5 p-5 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <div
                  className="text-3xl font-black shrink-0 w-12 text-center leading-none pt-1"
                  style={{ color: "rgba(198,40,40,0.2)" }}
                >
                  {v.number}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: "#1A1A1A" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
