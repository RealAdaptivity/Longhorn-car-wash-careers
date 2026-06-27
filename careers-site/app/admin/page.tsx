"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase, type Application, type Position } from "@/lib/supabase";

type Tab = "applications" | "positions";
type StatusFilter = "all" | "pending" | "accepted" | "denied";

export default function AdminPage() {
  const [session, setSession] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [tab, setTab] = useState<Tab>("applications");
  const [applications, setApplications] = useState<Application[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [dataLoading, setDataLoading] = useState(false);

  // New position form
  const [showAddPosition, setShowAddPosition] = useState(false);
  const [newPos, setNewPos] = useState({ title: "", category: "", location: "Justin, TX", description: "" });
  const [addingPos, setAddingPos] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(!!data.session);
      setAuthLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(!!s);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const loadApplications = useCallback(async () => {
    setDataLoading(true);
    const query = supabase.from("applications").select("*").order("created_at", { ascending: false });
    const { data } = statusFilter === "all" ? await query : await query.eq("status", statusFilter);
    setApplications(data ?? []);
    setDataLoading(false);
  }, [statusFilter]);

  const loadPositions = useCallback(async () => {
    setDataLoading(true);
    const { data } = await supabase.from("positions").select("*").order("created_at");
    setPositions(data ?? []);
    setDataLoading(false);
  }, []);

  useEffect(() => {
    if (!session) return;
    if (tab === "applications") loadApplications();
    else loadPositions();
  }, [session, tab, loadApplications, loadPositions]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoginLoading(false);
    if (error) setLoginError(error.message);
  };

  const logout = () => supabase.auth.signOut();

  const updateAppStatus = async (id: string, status: "accepted" | "denied") => {
    await supabase.from("applications").update({ status }).eq("id", id);
    setApplications((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  const togglePosition = async (id: string, active: boolean) => {
    await supabase.from("positions").update({ active }).eq("id", id);
    setPositions((prev) => prev.map((p) => (p.id === id ? { ...p, active } : p)));
  };

  const deletePosition = async (id: string) => {
    if (!confirm("Remove this position permanently?")) return;
    await supabase.from("positions").delete().eq("id", id);
    setPositions((prev) => prev.filter((p) => p.id !== id));
  };

  const addPosition = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddingPos(true);
    const { data } = await supabase.from("positions").insert(newPos).select().single();
    if (data) {
      setPositions((prev) => [...prev, data]);
      setNewPos({ title: "", category: "", location: "Justin, TX", description: "" });
      setShowAddPosition(false);
    }
    setAddingPos(false);
  };

  const statusColor = (s: Application["status"]) => {
    if (s === "accepted") return { backgroundColor: "#dcfce7", color: "#166534" };
    if (s === "denied") return { backgroundColor: "#fee2e2", color: "#991b1b" };
    return { backgroundColor: "#fef9c3", color: "#854d0e" };
  };

  if (authLoading) {
    return <div className="min-h-screen bg-white flex items-center justify-center text-gray-400">Loading…</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#C62828" }}>
              <span className="text-white font-black text-xl">LH</span>
            </div>
            <h1 className="text-2xl font-black" style={{ color: "#1A1A1A" }}>Manager Login</h1>
            <p className="text-sm text-gray-400 mt-1">Longhorn Car Wash — Admin Portal</p>
          </div>
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400"
                placeholder="manager@longhorncarwashtx.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400"
                placeholder="••••••••" />
            </div>
            {loginError && <p className="text-red-600 text-sm">{loginError}</p>}
            <button type="submit" disabled={loginLoading}
              className="w-full py-3 rounded-xl text-white font-bold transition-all hover:opacity-90 disabled:opacity-60"
              style={{ backgroundColor: "#C62828" }}>
              {loginLoading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm" style={{ backgroundColor: "#C62828" }}>LH</div>
          <span className="font-bold text-gray-800">Manager Portal</span>
        </div>
        <button onClick={logout} className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Sign Out</button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {(["applications", "positions"] as Tab[]).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all capitalize ${tab === t ? "text-white" : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"}`}
              style={tab === t ? { backgroundColor: "#C62828" } : {}}>
              {t}
            </button>
          ))}
        </div>

        {/* Applications Tab */}
        {tab === "applications" && (
          <div>
            <div className="flex gap-2 mb-6 flex-wrap">
              {(["all", "pending", "accepted", "denied"] as StatusFilter[]).map((s) => (
                <button key={s} onClick={() => setStatusFilter(s)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${statusFilter === s ? "text-white" : "bg-white text-gray-500 border border-gray-200"}`}
                  style={statusFilter === s ? { backgroundColor: "#1A1A1A" } : {}}>
                  {s}
                </button>
              ))}
            </div>

            {dataLoading ? (
              <p className="text-gray-400 text-center py-12">Loading applications…</p>
            ) : applications.length === 0 ? (
              <p className="text-gray-400 text-center py-12">No applications found.</p>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="bg-white rounded-2xl border border-gray-100 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-black text-lg" style={{ color: "#1A1A1A" }}>{app.name}</h3>
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold capitalize" style={statusColor(app.status)}>
                            {app.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{app.position} · {app.email} · {app.phone}</p>
                        {app.availability && <p className="text-xs text-gray-400 mt-1">Availability: {app.availability}{app.start_date ? ` · Start: ${app.start_date}` : ""}</p>}
                        {app.why_longhorn && (
                          <p className="text-sm text-gray-700 mt-3 leading-relaxed border-l-2 border-gray-100 pl-3">{app.why_longhorn}</p>
                        )}
                        {app.experience && (
                          <p className="text-sm text-gray-500 mt-2 leading-relaxed"><span className="font-semibold">Experience:</span> {app.experience}</p>
                        )}
                        <div className="flex gap-3 mt-2 text-xs text-gray-400 flex-wrap">
                          {app.over_18 !== null && <span>18+: {app.over_18 ? "Yes" : "No"}</span>}
                          {app.authorized !== null && <span>Work Auth: {app.authorized ? "Yes" : "No"}</span>}
                          {app.referral && <span>Referral: {app.referral}</span>}
                          {app.resume_url && <a href={app.resume_url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">View Resume</a>}
                        </div>
                        <p className="text-xs text-gray-300 mt-2">{new Date(app.created_at).toLocaleString()}</p>
                      </div>
                      {app.status === "pending" && (
                        <div className="flex gap-2 shrink-0">
                          <button onClick={() => updateAppStatus(app.id, "accepted")}
                            className="px-4 py-2 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90"
                            style={{ backgroundColor: "#16a34a" }}>
                            Accept
                          </button>
                          <button onClick={() => updateAppStatus(app.id, "denied")}
                            className="px-4 py-2 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90"
                            style={{ backgroundColor: "#dc2626" }}>
                            Deny
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Positions Tab */}
        {tab === "positions" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500 text-sm">{positions.length} position{positions.length !== 1 ? "s" : ""}</p>
              <button onClick={() => setShowAddPosition(!showAddPosition)}
                className="px-5 py-2 rounded-full text-white font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#C62828" }}>
                + Add Position
              </button>
            </div>

            {showAddPosition && (
              <form onSubmit={addPosition} className="bg-white rounded-2xl border-2 border-red-100 p-6 mb-6 space-y-4">
                <h3 className="font-black text-lg" style={{ color: "#1A1A1A" }}>New Position</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder="Title (e.g. Site Manager)" value={newPos.title}
                    onChange={(e) => setNewPos((p) => ({ ...p, title: e.target.value }))}
                    className="border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400" />
                  <input required placeholder="Category (e.g. Site Operations)" value={newPos.category}
                    onChange={(e) => setNewPos((p) => ({ ...p, category: e.target.value }))}
                    className="border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400" />
                  <input placeholder="Location" value={newPos.location}
                    onChange={(e) => setNewPos((p) => ({ ...p, location: e.target.value }))}
                    className="border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400" />
                </div>
                <textarea required placeholder="Job description…" rows={3} value={newPos.description}
                  onChange={(e) => setNewPos((p) => ({ ...p, description: e.target.value }))}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-400 resize-none" />
                <div className="flex gap-3">
                  <button type="submit" disabled={addingPos}
                    className="px-6 py-2 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "#C62828" }}>
                    {addingPos ? "Adding…" : "Add Position"}
                  </button>
                  <button type="button" onClick={() => setShowAddPosition(false)}
                    className="px-6 py-2 rounded-xl font-bold text-sm text-gray-500 border border-gray-200 hover:bg-gray-50">
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {dataLoading ? (
              <p className="text-gray-400 text-center py-12">Loading positions…</p>
            ) : (
              <div className="space-y-4">
                {positions.map((pos) => (
                  <div key={pos.id} className={`bg-white rounded-2xl border p-6 ${pos.active ? "border-gray-100" : "border-gray-200 opacity-60"}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-black text-lg" style={{ color: "#1A1A1A" }}>{pos.title}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${pos.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                            {pos.active ? "Active" : "Hidden"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{pos.category} · {pos.location}</p>
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{pos.description}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button onClick={() => togglePosition(pos.id, !pos.active)}
                          className="px-4 py-2 rounded-lg text-sm font-bold border border-gray-200 hover:bg-gray-50 transition-all text-gray-700">
                          {pos.active ? "Hide" : "Show"}
                        </button>
                        <button onClick={() => deletePosition(pos.id)}
                          className="px-4 py-2 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90"
                          style={{ backgroundColor: "#dc2626" }}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
