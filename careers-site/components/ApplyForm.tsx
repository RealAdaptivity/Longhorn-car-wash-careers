"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const positions = [
  "Site Manager",
  "Assistant Site Manager",
  "Supervisor",
  "Attendant",
  "General Application",
];

export default function ApplyForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      name: form.name,
      email: form.email,
      phone: form.phone,
      position: form.position,
    });
    router.push(`/apply?${params.toString()}`);
  };

  return (
    <section id="apply" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#C62828" }}>
            Ready to Join?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4" style={{ color: "#1A1A1A" }}>
            Apply Today
          </h2>
          <p className="text-gray-500 text-lg">
            Start your application below — takes less than 5 minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                Full Name <span style={{ color: "#C62828" }}>*</span>
              </label>
              <input
                type="text" name="name" required value={form.name} onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                Email Address <span style={{ color: "#C62828" }}>*</span>
              </label>
              <input
                type="email" name="email" required value={form.email} onChange={handleChange}
                placeholder="jane@email.com"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                Phone Number
              </label>
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="(817) 555-0100"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                Position of Interest <span style={{ color: "#C62828" }}>*</span>
              </label>
              <select
                name="position" required value={form.position} onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors bg-white"
              >
                <option value="">Select a position…</option>
                {positions.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#C62828" }}
          >
            Continue Application →
          </button>

          <p className="text-center text-xs text-gray-400">
            Your information is only used for hiring purposes.
          </p>
        </form>
      </div>
    </section>
  );
}
