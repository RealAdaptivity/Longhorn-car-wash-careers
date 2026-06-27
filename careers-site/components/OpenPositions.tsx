"use client";

import { useState } from "react";
import Link from "next/link";

const TEAL = "#1A1A1A";

const allPositions = [
  {
    id: "site-manager",
    title: "SITE MANAGER JOB – JUSTIN, TX",
    category: "Field Leadership & Management",
    location: "TX",
    description:
      "Lead the full daily operation of the Longhorn Car Wash location — from staffing and training to customer experience and hitting performance goals. The Site Manager is accountable for the team's success and ...",
  },
  {
    id: "assistant-site-manager",
    title: "ASSISTANT SITE MANAGER JOB – JUSTIN, TX",
    category: "Field Leadership & Management",
    location: "TX",
    description:
      "Support the Site Manager in running a smooth, high-performing operation. You'll step in as acting manager when needed, help coach the team, and ensure every customer leaves with a great experience and ...",
  },
  {
    id: "supervisor",
    title: "SUPERVISOR JOB – JUSTIN, TX",
    category: "Site Operations",
    location: "TX",
    description:
      "Oversee shift operations, guide attendants, and keep the tunnel running efficiently. The Supervisor is the go-to person on the floor — setting the standard for speed, quality, and customer service and ...",
  },
  {
    id: "attendant",
    title: "ATTENDANT JOB – JUSTIN, TX",
    category: "Site Operations",
    location: "TX",
    description:
      "Be the energy of our location. Welcome customers, guide vehicles through the tunnel, keep the facility clean, and deliver a great experience on every visit. No experience needed — we train you and ...",
  },
];

const CATEGORIES = [
  "Field Leadership & Management",
  "Site Operations",
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
                    href={`/apply?position=${encodeURIComponent(pos.title)}`}
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
            href="/apply"
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
