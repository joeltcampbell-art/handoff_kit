# Ridgeline Roofing Job Tracker

Ridgeline Roofing is a small (invented) roofing contractor with three crews. This job tracker lets the office manager log incoming roof jobs, assign each job to a crew, track its status from "quoted" through "complete," and send the customer an invoice when the work is done. Customers pay their deposit and final invoice online by card.

The tracker is a Next.js web app. Job and customer records are stored in Supabase, card payments run through Stripe, and job-status emails (quote sent, crew scheduled, invoice due) are sent with Resend. Only office staff log in; crews receive their schedule by email. See `NOTES.md` for build notes.
