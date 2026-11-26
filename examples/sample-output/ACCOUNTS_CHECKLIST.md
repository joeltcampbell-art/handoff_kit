# Accounts Checklist: Ridgeline Roofing Job Tracker

These are the outside services the job tracker depends on. The owner should hold every account, and the builder's access should be removed. Setting names are listed here; their values are never included.

## Hosting
**What it's for:** Runs the website so office staff can reach it.
**Settings it uses (names only):** All settings below are stored here.
**Provider:** Not found in project — confirm with builder.
- [ ] Owner holds the account (login and billing in owner's name)
- [ ] Builder's access removed
- [ ] Keys rotated after handoff

## Supabase
**What it's for:** The online database that stores jobs, crews and customer records. It also handles office staff logins.
**Settings it uses (names only):** `SUPABASE_URL`, `SUPABASE_ANON_KEY`
- [ ] Owner holds the account (login and billing in owner's name)
- [ ] Builder's access removed
- [ ] Keys rotated after handoff

## Stripe
**What it's for:** Runs the online card payments for customer deposits and final invoices.
**Settings it uses (names only):** `STRIPE_SECRET_KEY`. A webhook signing secret is also used (per the build notes), but its setting name is not listed in the project — confirm with builder.
- [ ] Owner holds the account (login and billing in owner's name)
- [ ] Builder's access removed
- [ ] Keys rotated after handoff (including the webhook signing secret)

## Resend
**What it's for:** Sends job-status emails to customers (quote sent, crew scheduled, invoice due) and schedules to crews. Sends from office@ridgelineroofing.example.
**Settings it uses (names only):** `RESEND_API_KEY`
- [ ] Owner holds the account (login and billing in owner's name)
- [ ] Builder's access removed
- [ ] Keys rotated after handoff

## Domain name
The app uses ridgelineroofing.example, including tracker.ridgelineroofing.example for the tracker and office@ridgelineroofing.example for email. Who registered the domain, and with which registrar: Not found in project — confirm with builder.
- [ ] Owner holds the domain registration
- [ ] Builder's access removed
