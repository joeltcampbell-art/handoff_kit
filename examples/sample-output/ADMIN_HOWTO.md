# Admin How-To: Ridgeline Roofing Job Tracker

## Add or remove a user
Only office staff log in. Logins are handled by Supabase, the online database service.

1. Sign in to the Supabase dashboard with the owner's account.
2. Open the Ridgeline project.
3. Go to the **Authentication** section, then **Users**.
4. To add someone, invite or create a user with their email address.
5. To remove someone, find their email and delete the user.

The project files do not describe staff roles or permission levels. Confirm with the builder if some staff should see less than others.

## Change a setting
The main business setting found in the project is the **deposit percentage** (currently 30%). It lives in the app's code, not on a settings screen.

1. Ask a developer to change `DEPOSIT_PERCENT` in `src/lib/billing.ts`.
2. Have them redeploy the app (see "Redeploy the app" below).
3. Create a test job and check the deposit amount is correct.

The customer email "from" address (office@ridgelineroofing.example) is changed the same way, in the same file. Any new sending domain must first be verified in Resend.

## Rotate an API key
"Rotating" a key means replacing it with a new one so old copies stop working. Do this after handoff for every service.

Which settings belong to which service:
- **Supabase (database and logins):** `SUPABASE_URL`, `SUPABASE_ANON_KEY`
- **Stripe (card payments):** `STRIPE_SECRET_KEY`. The build notes also mention a Stripe webhook signing secret; its setting name is not listed in the project — confirm with builder.
- **Resend (email):** `RESEND_API_KEY`

Steps:
1. Sign in to the service's dashboard (Supabase, Stripe or Resend).
2. Create a new key.
3. Where the app is hosted, update the matching setting name with the new key.
4. Redeploy the app.
5. Check the app still works: load the Jobs page, send a test email, run a test payment.
6. Delete or disable the old key in the service's dashboard.

## Redeploy the app
Not found in project — confirm with builder.

The project has a standard build command (`next build`), but no hosting or deploy setup was found. The builder should explain where the app runs and how to redeploy it.

## Back up the data
Not found in project — confirm with builder.

All job, crew and customer records live in Supabase. Ask the builder how backups are set up. Note that the project uses (or has used) the Supabase free tier, which pauses after a week of no activity. Confirm what backup options your Supabase plan includes.
