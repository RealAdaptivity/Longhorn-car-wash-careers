"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase, type Position } from "@/lib/supabase";

export default function OpenPositions() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  useEffect(() => {
    supabase
      .from("positions")
      .select("*")
      .eq("active", true)
      .order("created_at")
      .then(({ data }) => {
        setPositions(data ?? []);
        setLoading(false);
      });
  }, []);

  const toggle = (val: string, selected: string[], set: (v: string[]) => void) => {
    set(selected.includes(val) ? selected.filter((x) => x !== val) : [...selected, val]);
  };

  const categories = [...new Set(positions.map((p) => p.category))];
  const locations = [...new Set(positions.map((p) => p.location))];

  const filtered = positions.filter((p) => {
    const catOk = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const locOk = selectedLocations.length === 0 || selectedLocations.includes(p.location);
    return catOk && locOk;
  });

  return (
    <section id="positions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-black" style={{ color: "#1A1A1A" }}>Open Positions</h2>
          <p className="text-gray-500 mt-1">
            {loading ? "Loading…" : `${filtered.length} position${filtered.length !== 1 ? "s" : ""} available`}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <h3 className="text-lg font-black uppercase tracking-wide mb-5" style={{ color: "#1A1A1A" }}>
              Filter Jobs
            </h3>

            <div className="mb-8">
              <h4 className="text-base font-bold text-gray-900 mb-3">Job Title</h4>
              <ul className="space-y-2">
                {categories.map((cat) => {
                  const count = positions.filter((p) => p.category === cat).length;
                  const checked = selectedCategories.includes(cat);
                  return (
                    <li key={cat} className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(cat, selectedCategories, setSelectedCategories)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-800">{cat} ({count})</span>
                      </label>
                      <button
                        onClick={() => toggle(cat, selectedCategories, setSelectedCategories)}
                        className="text-xs font-bold ml-2 shrink-0 text-gray-600"
                      >
                        [{checked ? "−" : "+"}]
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold text-gray-900 mb-3">Location</h4>
              <ul className="space-y-2">
                {locations.map((loc) => {
                  const count = positions.filter((p) => p.location === loc).length;
                  const checked = selectedLocations.includes(loc);
                  return (
                    <li key={loc} className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(loc, selectedLocations, setSelectedLocations)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-800">{loc} ({count})</span>
                      </label>
                      <button
                        onClick={() => toggle(loc, selectedLocations, setSelectedLocations)}
                        className="text-xs font-bold ml-2 shrink-0 text-gray-600"
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
                onClick={() => { setSelectedCategories([]); setSelectedLocations([]); }}
                className="mt-6 text-sm underline text-gray-400 hover:text-gray-600 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Listings */}
          <div className="flex-1 divide-y divide-gray-100">
            {loading ? (
              <p className="py-12 text-gray-400 text-center">Loading positions…</p>
            ) : filtered.length === 0 ? (
              <p className="py-12 text-gray-400 text-center">No positions match your filters.</p>
            ) : (
              filtered.map((pos) => (
                <div key={pos.id} className="py-7 first:pt-0">
                  <Link
                    href={`/apply?position=${encodeURIComponent(pos.title)}`}
                    className="block text-base font-black uppercase tracking-wide hover:underline mb-1"
                    style={{ color: "#1A1A1A" }}
                  >
                    {pos.title.toUpperCase()} JOB – {pos.location.toUpperCase()}
                  </Link>
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">{pos.category}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{pos.description}</p>
                </div>
              ))
            )}
          </div>
        </div>

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
