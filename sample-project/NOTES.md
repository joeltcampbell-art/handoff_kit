# Build notes

- Stripe webhook needed the signing secret re-entered after deploy. If card payments succeed but jobs stay "awaiting payment," check the webhook signing secret first.
- Resend only sends from a verified domain. Emails to customers silently failed until the ridgelineroofing.example domain was verified in the Resend dashboard.
- Supabase free tier pauses the project after a week of no activity. The office saw "Failed to fetch" on the jobs page until the project was resumed.
