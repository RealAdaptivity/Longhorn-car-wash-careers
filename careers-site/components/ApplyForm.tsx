"use client";

import { useState } from "react";

const positions = [
  "Car Wash Attendant",
  "Lead Attendant",
  "Assistant Manager",
  "General Manager",
  "General Application",
];

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    availability: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API/email handler
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="apply"
      className="py-24"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: "#000000" }}
          >
            Ready to Join?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4 text-white">
            Apply Today
          </h2>
          <p className="text-gray-300 text-lg">
            Fill out the form below and a member of our team will reach out
            within 1–2 business days.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-10 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: "rgba(191,87,0,0.1)" }}
            >
              <svg className="w-8 h-8" style={{ color: "#C62828" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-3" style={{ color: "#1A1A1A" }}>
              Application Received!
            </h3>
            <p className="text-gray-600">
              Thanks for your interest in Longhorn Car Wash. We&apos;ll review
              your application and be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                  Full Name <span style={{ color: "#C62828" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                  Email Address <span style={{ color: "#C62828" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@email.com"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(817) 555-0100"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                  Position of Interest <span style={{ color: "#C62828" }}>*</span>
                </label>
                <select
                  name="position"
                  required
                  value={form.position}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                >
                  <option value="">Select a position…</option>
                  {positions.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                Availability
              </label>
              <select
                name="availability"
                value={form.availability}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
              >
                <option value="">Select availability…</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Weekends Only</option>
                <option>Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                Tell Us a Little About Yourself
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Previous experience, why you want to join the team, anything else we should know…"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#C62828" }}
            >
              {loading ? "Submitting…" : "Submit Application"}
            </button>

            <p className="text-center text-xs text-gray-400">
              We respect your privacy. Your information will only be used for
              hiring purposes.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
