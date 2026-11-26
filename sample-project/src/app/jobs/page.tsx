import { listJobs } from "@/lib/supabase";

// Office dashboard: every job with its crew and status. Staff-only (Supabase auth).
export default async function JobsPage() {
  const jobs = await listJobs();
  return (
    <main>
      <h1>Ridgeline Roofing: Jobs</h1>
      <table>
        <thead><tr><th>Customer</th><th>Address</th><th>Crew</th><th>Status</th></tr></thead>
        <tbody>
          {jobs?.map((j: any) => (
            <tr key={j.id}><td>{j.customer_name}</td><td>{j.address}</td><td>{j.crew?.name ?? "Unassigned"}</td><td>{j.status}</td></tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
