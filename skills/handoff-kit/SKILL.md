---
name: handoff-kit
description: Generate a plain-language client handoff kit (owner's guide, admin how-tos, troubleshooting, accounts checklist, test summary) for a finished software project, written into a handoff/ folder. Use when handing a project over to a client or owner, when asked to create a handoff kit, handoff docs, handover documentation, an owner's guide, an admin guide, or an accounts/ownership checklist for a project or folder.
---

# Handoff Kit

Produce a `handoff/` folder of five short, plain-language documents that let a non-technical business owner run, maintain and take full ownership of a software project.

## Hard rules (never break these)

1. **No secret values, ever.** Never print, copy, quote or summarize the value of an API key, password, token, connection string or any other secret. Refer to environment variables by **name only** (for example `STRIPE_SECRET_KEY`).
2. **Do not open real environment files.** Never read, cat, open or grep `.env`, `.env.local`, `.env.production`, `.env.development` or any similar file holding real values. Get variable names only from `.env.example` (or `.env.sample`, `.env.template`), config files and code references such as `process.env.NAME`. If only a real `.env` file exists, stop and ask the user to list the variable names instead of reading it.
   - When you search file contents (grep, ripgrep, Grep tool), always exclude real env files, e.g. `--glob '!.env*' --glob '.env.example'`, so their contents never appear in your results. Listing that a file exists is fine; reading it is not.
3. **Never invent.** Do not invent features, services, hosting providers, test results, users, prices or procedures that are not evidenced in the project files. A framework hint (for example "it's Next.js") is not evidence of a host.
4. **Missing vs. not applicable.**
   - **Missing:** if something every project needs (hosting, where the database lives, how to deploy, how to back up) has no evidence, keep the section and write exactly: `Not found in project — confirm with builder.`
   - **Not applicable:** if a section does not fit this kind of project at all (for example user management in a tool with no logins), delete that section entirely.
5. **Ask before overwriting.** If a `handoff/` folder already exists in the target project, stop before writing anything, tell the user it exists, and ask whether to replace it. Only continue if the user clearly says yes. If they say no, change nothing.
6. **Keep it short.** Each document is about 600 words maximum. Owners will not read 20 pages.
7. **Templates are relative to this skill.** Load templates from the `templates/` folder in the same directory as this `SKILL.md` (the skill's base directory), not from a fixed absolute path.

## Workflow

1. **Locate the project.** Use the folder the user names; otherwise the current working directory. Write output to `<project>/handoff/`.
2. **Overwrite check.** If `<project>/handoff/` exists, apply hard rule 5 and wait for an answer.
3. **Gather evidence** (read only; respect hard rule 2):
   - `README*`, `NOTES.md`, `TROUBLESHOOTING_LOG.md`, `CHANGELOG*`, docs folders, known-issues lists.
   - Dependency manifests (`package.json`, `requirements.txt`, `pyproject.toml`, `Gemfile`, `go.mod`, `composer.json`) to detect external services (for example `stripe`, `@supabase/supabase-js`, `resend`, `@sendgrid/mail`, `twilio`, `openai`).
   - `.env.example`-style files and `process.env.*` / `os.environ[...]` references for variable **names**.
   - Hosting and deploy config: `vercel.json`, `netlify.toml`, `fly.toml`, `render.yaml`, `Dockerfile`, `Procfile`, `.github/workflows/`, `app.yaml`, `serverless.yml`. Only these (or explicit statements in docs) count as hosting evidence.
   - Source files for what the system does, user-facing settings (prices, text, percentages), logins/roles, and error messages that hint at common problems.
   - Test evidence: test reports, coverage output, CI result files, `test-results/`, `junit*.xml`, `TEST_REPORT*`. Test files or a `test` script alone are **not** results.
4. **Fill the templates.** For each file in `templates/`, copy its headings, replace each one-line prompt with content drawn from the evidence, and remove the prompt lines. Apply hard rules 3, 4 and 6.
5. **Write the five files** to `<project>/handoff/`:
   - `OWNERS_GUIDE.md`
   - `ADMIN_HOWTO.md`
   - `TROUBLESHOOTING.md`
   - `ACCOUNTS_CHECKLIST.md`
   - `TEST_SUMMARY.md`
6. **Self-check before finishing.** Re-read the output and confirm: no secret values; every service and claim is backed by a file you read; missing essentials say `Not found in project — confirm with builder.`; each file is about 600 words or fewer.
7. **Report** the folder path, the five files, and any items marked "confirm with builder."

## Writing style for the documents

- Written for a business owner, not a developer. Plain US English. Short sections, short sentences.
- Explain technical names once in plain words ("Supabase, the online database that stores your jobs").
- Use numbered steps for tasks. Use checkboxes (`- [ ]`) in the accounts checklist.
- No code blocks unless a command is genuinely needed for a task.

## Document-specific notes

- **ACCOUNTS_CHECKLIST.md:** one entry per external service detected from dependencies, config and variable names. For each: what it is for, the variable names it uses, and three checkboxes: owner holds the account; builder's access removed; keys rotated. Always include a Hosting entry; if there is no hosting evidence, mark it `Not found in project — confirm with builder.`
- **TROUBLESHOOTING.md:** include every relevant build note from `NOTES.md` / `TROUBLESHOOTING_LOG.md`, plus problems implied by error messages in the code and README.
- **TEST_SUMMARY.md:** if no test results or reports exist, say plainly: "No test results were found in the project." Do not describe tests that were not run or results that were not recorded.
