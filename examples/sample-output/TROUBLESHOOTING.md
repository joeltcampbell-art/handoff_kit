# Troubleshooting: Ridgeline Roofing Job Tracker

Try these fixes first. If a problem continues, contact the builder.

## The Jobs page won't load
**What you see:** The Jobs page shows "Failed to fetch," or a message saying "Could not load jobs. Check that the Supabase project is running."
**Likely cause:** The Supabase free tier pauses the project after a week with no activity. This happened during the build.
**What to do:**
1. Sign in to the Supabase dashboard.
2. Open the Ridgeline project.
3. If it shows as paused, click to resume (restore) it.
4. Wait a few minutes, then reload the Jobs page.
5. To stop this happening again, consider moving to a paid Supabase plan.

## Customers paid, but jobs still say "awaiting payment"
**What you see:** Stripe shows the card payment went through, but the job never changes to "paid."
**Likely cause:** Stripe tells the app about payments using a "webhook" (an automatic message). It needs a signing secret to be trusted. During the build, this secret had to be re-entered after deploying.
**What to do:**
1. Sign in to the Stripe dashboard and open the webhook settings.
2. Copy the webhook signing secret.
3. Where the app is hosted, check that the signing secret setting matches. (Its setting name is not listed in the project — confirm with builder.)
4. Redeploy the app.
5. Run a small test payment to confirm jobs now update.

## Customers or crews aren't getting emails
**What you see:** Quote, schedule or invoice emails never arrive. There is no error on screen.
**Likely cause:** Resend only sends from a verified domain. During the build, emails failed silently until ridgelineroofing.example was verified. The app logs "Email failed. Is the sending domain verified in Resend?" when this happens.
**What to do:**
1. Sign in to the Resend dashboard.
2. Open **Domains** and check that ridgelineroofing.example shows as verified.
3. If not, follow Resend's steps to re-verify it. This usually means adding records at your domain registrar.
4. Send a test email to yourself.
5. If the domain is verified and emails still fail, check that the Resend key (`RESEND_API_KEY`) is still valid.

## A job shows "Unassigned"
**What you see:** The Crew column on the Jobs page says "Unassigned."
**Likely cause:** No crew has been assigned to that job yet. This is normal for new jobs.
**What to do:**
1. Assign a crew to the job.
2. The status will change to "scheduled."
