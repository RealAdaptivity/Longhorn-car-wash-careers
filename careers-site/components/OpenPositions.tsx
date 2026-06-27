"use client";

import { useState } from "react";
import Link from "next/link";

const TEAL = "#00897B";

const allPositions = [
  {
    id: "car-wash-attendant-1",
    title: "CAR WASH ATTENDANT JOB – JUSTIN, TX",
    category: "Site Operations",
    location: "TX",
    description:
      "Guide vehicles through our express tunnel, assist customers, and keep our facility clean and welcoming. Great for entry-level candidates — no prior experience needed. We provide full on-the-job training and ...",
  },
  {
    id: "lead-attendant-1",
    title: "LEAD ATTENDANT JOB – JUSTIN, TX",
    category: "Site Operations",
    location: "TX",
    description:
      "Oversee daily operations, coach team members, and ensure every car leaves spotless. Prior car wash or retail experience preferred. The Lead Attendant sets the pace and standard for the whole shift and ...",
  },
  {
    id: "assistant-manager-1",
    title: "ASSISTANT MANAGER JOB – JUSTIN, TX",
    category: "Field Leadership & Management",
    location: "TX",
    description:
      "Support the General Manager with scheduling, inventory, and staff development. Strong communication and organizational skills required. The Assistant Manager is a key partner in driving location performance and ...",
  },
  {
    id: "general-manager-1",
    title: "GENERAL MANAGER JOB – JUSTIN, TX",
    category: "Field Leadership & Management",
    location: "TX",
    description:
      "Lead the entire location — from hiring and training to hitting revenue goals and delivering an exceptional customer experience every day. The General Manager owns the full site P&L and ...",
  },
  {
    id: "maintenance-tech-1",
    title: "MAINTENANCE TECHNICIAN JOB – JUSTIN, TX",
    category: "Maintenance & Facilities",
    location: "TX",
    description:
      "Keep our tunnel equipment, conveyors, and wash systems running at peak performance. You'll perform preventive maintenance, diagnose issues quickly, and coordinate with vendors when needed to minimize downtime and ...",
  },
  {
    id: "customer-service-1",
    title: "CUSTOMER SERVICE REPRESENTATIVE JOB – JUSTIN, TX",
    category: "Site Operations",
    location: "TX",
    description:
      "Be the first face our customers see. Welcome every driver, handle membership sign-ups, answer questions, and create a five-star experience from arrival to exit. Full training provided and ...",
  },
];

const CATEGORIES = [
  "Field Leadership & Management",
  "Maintenance & Facilities",
  "Site Operations",
  "ZHQ Support Services",
];

const LOCATIONS = ["TX"];

export default function OpenPositions() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggle = (
    val: string,
    selected: string[],
    set: (v: string[]) => void
  ) => {
    set(
      selected.includes(val)
        ? selected.filter((x) => x !== val)
        : [...selected, val]
    );
  };

  const filtered = allPositions.filter((p) => {
    const catOk =
      selectedCategories.length === 0 ||
      selectedCategories.includes(p.category);
    const locOk =
      selectedLocations.length === 0 || selectedLocations.includes(p.location);
    return catOk && locOk;
  });

  const categoryCount = (cat: string) =>
    allPositions.filter((p) => p.category === cat).length;

  const locationCount = (loc: string) =>
    allPositions.filter((p) => p.location === loc).length;

  return (
    <section id="positions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <h2 className="text-3xl font-black" style={{ color: "#1A1A1A" }}>
            Open Positions
          </h2>
          <p className="text-gray-500 mt-1">
            {filtered.length} position{filtered.length !== 1 ? "s" : ""} available
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* ── Sidebar ── */}
          <aside className="w-full md:w-64 shrink-0">
            <h3
              className="text-lg font-black uppercase tracking-wide mb-5"
              style={{ color: TEAL }}
            >
              Filter Jobs
            </h3>

            {/* Job Title */}
            <div className="mb-8">
              <h4 className="text-base font-bold text-gray-900 mb-3">
                Job Title
              </h4>
              <ul className="space-y-2">
                {CATEGORIES.map((cat) => {
                  const count = categoryCount(cat);
                  const checked = selectedCategories.includes(cat);
                  return (
                    <li key={cat} className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() =>
                            toggle(cat, selectedCategories, setSelectedCategories)
                          }
                          className="w-4 h-4 rounded border-gray-300 accent-teal-600"
                        />
                        <span
                          className="text-sm"
                          style={{ color: checked ? TEAL : TEAL }}
                        >
                          {cat} ({count})
                        </span>
                      </label>
                      <button
                        onClick={() =>
                          toggle(cat, selectedCategories, setSelectedCategories)
                        }
                        className="text-xs font-bold ml-2 shrink-0"
                        style={{ color: TEAL }}
                        aria-label={`Toggle ${cat}`}
                      >
                        [{checked ? "−" : "+"}]
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-3">
                Location
              </h4>
              <ul className="space-y-2">
                {LOCATIONS.map((loc) => {
                  const count = locationCount(loc);
                  const checked = selectedLocations.includes(loc);
                  return (
                    <li key={loc} className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() =>
                            toggle(loc, selectedLocations, setSelectedLocations)
                          }
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="text-sm" style={{ color: TEAL }}>
                          {loc} ({count})
                        </span>
                      </label>
                      <button
                        onClick={() =>
                          toggle(loc, selectedLocations, setSelectedLocations)
                        }
                        className="text-xs font-bold ml-2 shrink-0"
                        style={{ color: TEAL }}
                        aria-label={`Toggle ${loc}`}
                      >
                        [{checked ? "−" : "+"}]
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {(selectedCategories.length > 0 || selectedLocations.length > 0) && (
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedLocations([]);
                }}
                className="mt-6 text-sm underline text-gray-400 hover:text-gray-600 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* ── Job Listings ── */}
          <div className="flex-1 divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <p className="py-12 text-gray-400 text-center">
                No positions match your filters.
              </p>
            ) : (
              filtered.map((pos) => (
                <div key={pos.id} className="py-7 first:pt-0">
                  <Link
                    href="#apply"
                    className="block text-base font-black uppercase tracking-wide hover:underline mb-2"
                    style={{ color: TEAL }}
                  >
                    {pos.title}
                  </Link>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {pos.description}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#apply"
            className="inline-block px-8 py-3 rounded-full text-white font-bold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#C62828" }}
          >
            Submit a General Application
          </Link>
        </div>
      </div>
    </section>
  );
}
