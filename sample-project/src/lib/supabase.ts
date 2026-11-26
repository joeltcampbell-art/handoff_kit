import { createClient } from "@supabase/supabase-js";

// Job, crew and customer records live in Supabase.
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export type JobStatus = "quoted" | "scheduled" | "in_progress" | "complete" | "awaiting_payment" | "paid";

export async function listJobs() {
  const { data, error } = await supabase.from("jobs").select("*, crew:crews(name)").order("created_at", { ascending: false });
  if (error) throw new Error("Could not load jobs. Check that the Supabase project is running.");
  return data;
}

export async function assignCrew(jobId: string, crewId: string) {
  return supabase.from("jobs").update({ crew_id: crewId, status: "scheduled" }).eq("id", jobId);
}
