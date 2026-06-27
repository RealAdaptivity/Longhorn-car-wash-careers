import Link from "next/link";

const positions = [
  {
    id: "car-wash-attendant",
    title: "Car Wash Attendant",
    type: "Full-Time / Part-Time",
    location: "Justin, TX",
    pay: "$13–$16/hr",
    description:
      "Guide vehicles through our express tunnel, assist customers, and keep our facility clean and welcoming. Great for entry-level candidates — no experience needed!",
    tags: ["Entry Level", "Outdoor", "Customer-Facing"],
  },
  {
    id: "lead-attendant",
    title: "Lead Attendant",
    type: "Full-Time",
    location: "Justin, TX",
    pay: "$16–$19/hr",
    description:
      "Oversee daily operations, coach team members, and ensure every car leaves spotless. Prior car wash or retail leadership experience preferred.",
    tags: ["Leadership", "Full-Time", "Experienced"],
  },
  {
    id: "assistant-manager",
    title: "Assistant Manager",
    type: "Full-Time",
    location: "Justin, TX",
    pay: "$20–$24/hr",
    description:
      "Support the General Manager with scheduling, inventory, and staff development. Strong communication and organizational skills required.",
    tags: ["Management", "Salaried", "Growth Path"],
  },
  {
    id: "general-manager",
    title: "General Manager",
    type: "Full-Time",
    location: "Justin, TX",
    pay: "Competitive + Bonus",
    description:
      "Lead the entire location — from hiring and training to hitting revenue goals and delivering an exceptional customer experience every day.",
    tags: ["Executive", "Full-Time", "Bonus Eligible"],
  },
];

export default function OpenPositions() {
  return (
    <section id="positions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: "#C62828" }}
          >
            Join the Team
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4" style={{ color: "#1A1A1A" }}>
            Open Positions
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            We&apos;re growing and looking for motivated people who take pride in their work
            and love serving their community.
          </p>
        </div>

        {/* Position cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((pos) => (
            <div
              key={pos.id}
              className="group rounded-2xl border-2 border-gray-100 p-7 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "#1A1A1A" }}
                  >
                    {pos.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {pos.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {pos.type}
                    </span>
                  </div>
                </div>
                <div
                  className="text-sm font-black px-3 py-1.5 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: "#fee2e2", color: "#C62828" }}
                >
                  {pos.pay}
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                {pos.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {pos.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#f3f4f6", color: "#1A1A1A" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="#apply"
                className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#C62828" }}
              >
                Apply for this Role
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Don&apos;t see a fit?{" "}
          <Link href="#apply" className="underline hover:text-gray-600 transition-colors" style={{ color: "#C62828" }}>
            Submit a general application
          </Link>{" "}
          and we&apos;ll keep you in mind.
        </p>
      </div>
    </section>
  );
}
