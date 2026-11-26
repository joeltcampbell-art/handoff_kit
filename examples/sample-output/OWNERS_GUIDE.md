# Owner's Guide: Ridgeline Roofing Job Tracker

## What this system does
The job tracker is a website for the Ridgeline Roofing office. It lets the office manager log incoming roof jobs, assign each job to one of the crews, and track each job from "quoted" through "complete." When the work is done, the customer gets an invoice and pays online by card. Customers pay both their deposit and their final invoice this way.

## Who uses it
- **Office staff** log in to the tracker. They add jobs, assign crews, update job status and send invoices.
- **Crews** do not log in. They receive their schedule by email.
- **Customers** do not log in. They receive status emails (quote sent, crew scheduled, invoice due) and pay through a secure card payment page.

## Day-to-day use
1. Log in to the tracker as office staff.
2. Open the **Jobs** page. It lists every job with the customer, address, assigned crew and status. Jobs with no crew show "Unassigned."
3. Assign a crew to a new job. The job's status changes to "scheduled."
4. Move the job along as work progresses. The statuses are: quoted, scheduled, in progress, complete, awaiting payment and paid.
5. When the work is complete, send the customer an invoice. They pay by card online.
6. Once Stripe confirms the payment, the job should show as "paid."

## Changing common settings
- **Deposit percentage.** The deposit is 30% of the quoted price, and the balance is invoiced when the job is complete. This number is set inside the app's code (`src/lib/billing.ts`), not on a settings screen. Changing it means asking a developer to edit it and then redeploy the app.
- **Email "from" address.** Customer emails are sent from office@ridgelineroofing.example. This is also set in the code (`src/lib/billing.ts`). The sending domain must stay verified in Resend (see below).
- **Staff logins.** Office staff log in through Supabase. See ADMIN_HOWTO.md.

## Where things live
- **Website hosting (where the app runs):** Not found in project — confirm with builder.
- **Data (jobs, crews, customers):** Supabase, the online database that stores your records. Supabase also handles staff logins.
- **Card payments:** Stripe, the payment service that runs the online card checkout.
- **Emails:** Resend, the email service that sends job-status emails to customers and schedules to crews.
- **Web address:** The payment success page points to tracker.ridgelineroofing.example. Who registered the domain was not found in project — confirm with builder.

## Getting help
- For common problems and fixes, see **TROUBLESHOOTING.md**.
- For admin tasks like managing logins, changing keys or redeploying, see **ADMIN_HOWTO.md**.
- For accounts you need to take over, see **ACCOUNTS_CHECKLIST.md**.
- For anything else, contact the builder.
