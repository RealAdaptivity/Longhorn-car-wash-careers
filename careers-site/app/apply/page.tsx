"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ApplicationForm() {
  const params = useSearchParams();
  const prefill = {
    name: params.get("name") ?? "",
    email: params.get("email") ?? "",
    phone: params.get("phone") ?? "",
    position: params.get("position") ?? "",
  };

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    name: prefill.name,
    email: prefill.email,
    phone: prefill.phone,
    position: prefill.position,
    availability: "",
    startDate: "",
    experience: "",
    whyLonghorn: "",
    referral: "",
    over18: "",
    authorized: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 transition-colors bg-white";
  const labelClass = "block text-sm font-semibold mb-2 text-gray-800";

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center py-16">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "#fee2e2" }}
          >
            <svg className="w-10 h-10" style={{ color: "#C62828" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-3" style={{ color: "#1A1A1A" }}>
            Application Submitted!
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Thank you, {form.name}! We&apos;ve received your application for <strong>{form.position}</strong>.
            Our team will review it and reach out within 1–2 business days.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full text-white font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: "#C62828" }}
          >
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/#apply"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-800 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Careers
          </Link>
          <span className="text-sm font-bold uppercase tracking-widest block mb-2" style={{ color: "#C62828" }}>
            Longhorn Car Wash — Justin, TX
          </span>
          <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#1A1A1A" }}>
            {form.position ? `Apply: ${form.position}` : "Job Application"}
          </h1>
          <p className="text-gray-500 mt-2">Complete all fields below. Marked fields are required.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Personal Info */}
          <section>
            <h2 className="text-lg font-black mb-5 pb-2 border-b border-gray-100" style={{ color: "#1A1A1A" }}>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Full Name <span style={{ color: "#C62828" }}>*</span></label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email Address <span style={{ color: "#C62828" }}>*</span></label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@email.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Phone Number <span style={{ color: "#C62828" }}>*</span></label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="(817) 555-0100" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Position Applying For <span style={{ color: "#C62828" }}>*</span></label>
                <select name="position" required value={form.position} onChange={handleChange} className={inputClass}>
                  <option value="">Select a position…</option>
                  {["Site Manager","Assistant Site Manager","Supervisor","Attendant","General Application"].map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Availability */}
          <section>
            <h2 className="text-lg font-black mb-5 pb-2 border-b border-gray-100" style={{ color: "#1A1A1A" }}>
              Availability
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Work Availability <span style={{ color: "#C62828" }}>*</span></label>
                <select name="availability" required value={form.availability} onChange={handleChange} className={inputClass}>
                  <option value="">Select…</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Weekends Only</option>
                  <option>Flexible</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Earliest Start Date</label>
                <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-lg font-black mb-5 pb-2 border-b border-gray-100" style={{ color: "#1A1A1A" }}>
              Eligibility
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Are you 18 years or older? <span style={{ color: "#C62828" }}>*</span></label>
                <select name="over18" required value={form.over18} onChange={handleChange} className={inputClass}>
                  <option value="">Select…</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Authorized to work in the US? <span style={{ color: "#C62828" }}>*</span></label>
                <select name="authorized" required value={form.authorized} onChange={handleChange} className={inputClass}>
                  <option value="">Select…</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-lg font-black mb-5 pb-2 border-b border-gray-100" style={{ color: "#1A1A1A" }}>
              Experience &amp; Background
            </h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Previous Work Experience</label>
                <textarea
                  name="experience" value={form.experience} onChange={handleChange} rows={4}
                  placeholder="List any relevant jobs, roles, or skills. It's okay if you have none — we train everyone!"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div>
                <label className={labelClass}>Why do you want to work at Longhorn Car Wash? <span style={{ color: "#C62828" }}>*</span></label>
                <textarea
                  name="whyLonghorn" required value={form.whyLonghorn} onChange={handleChange} rows={4}
                  placeholder="Tell us what excites you about joining our team…"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div>
                <label className={labelClass}>How did you hear about us?</label>
                <select name="referral" value={form.referral} onChange={handleChange} className={inputClass}>
                  <option value="">Select…</option>
                  <option>Indeed</option>
                  <option>Facebook / Instagram</option>
                  <option>Friend or Family Referral</option>
                  <option>Drive-by / In-person</option>
                  <option>Google</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Resume Upload */}
          <section>
            <h2 className="text-lg font-black mb-5 pb-2 border-b border-gray-100" style={{ color: "#1A1A1A" }}>
              Resume (Optional)
            </h2>
            <div
              className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-red-300 transition-colors cursor-pointer"
              onClick={() => document.getElementById("resume-upload")?.click()}
            >
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
              />
              {resumeFile ? (
                <div>
                  <svg className="w-8 h-8 mx-auto mb-2" style={{ color: "#C62828" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold text-gray-800">{resumeFile.name}</p>
                  <p className="text-sm text-gray-400 mt-1">Click to change file</p>
                </div>
              ) : (
                <div>
                  <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="font-semibold text-gray-700">Click to upload your resume</p>
                  <p className="text-sm text-gray-400 mt-1">PDF, DOC, or DOCX — max 5MB</p>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              No resume? No problem — we welcome all applicants.
            </p>
          </section>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#C62828" }}
          >
            {loading ? "Submitting Application…" : "Submit Application"}
          </button>
          <p className="text-center text-xs text-gray-400 pb-8">
            Your information is only used for hiring purposes and will never be sold.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-gray-400">Loading…</div>}>
      <ApplicationForm />
    </Suspense>
  );
}
