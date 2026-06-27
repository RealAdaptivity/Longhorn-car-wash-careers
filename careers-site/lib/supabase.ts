import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, key);

export type Position = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  active: boolean;
  created_at: string;
};

export type Application = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  availability: string | null;
  start_date: string | null;
  experience: string | null;
  why_longhorn: string | null;
  referral: string | null;
  over_18: boolean | null;
  authorized: boolean | null;
  resume_url: string | null;
  status: "pending" | "accepted" | "denied";
  created_at: string;
};
