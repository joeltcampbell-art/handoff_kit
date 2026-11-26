# handoff-kit

A Claude skill that writes a plain-language **client handoff kit** for a finished software project. Point Claude at a project folder and it reads the code, config and build notes, then writes a `handoff/` folder with five short documents a non-technical owner can actually use. It's built for freelancers and agencies handing software over to clients.

| File | What it gives the owner |
|---|---|
| `OWNERS_GUIDE.md` | What the system does, everyday use, how to change common settings |
| `ADMIN_HOWTO.md` | Step-by-step: add a user, change a setting, rotate an API key, redeploy |
| `TROUBLESHOOTING.md` | Common problems and fixes, from the README, build notes and code |
| `ACCOUNTS_CHECKLIST.md` | Every outside service, its variable **names**, and ownership-transfer checkboxes |
| `TEST_SUMMARY.md` | Recorded test results, or a plain statement that none were found |

## Install

### Claude Code (tested)

Copy the skill folder into your personal skills folder:

```bash
mkdir -p ~/.claude/skills
cp -r skills/handoff-kit ~/.claude/skills/
```

Or, for one project only, copy it to that project's `.claude/skills/` folder. Claude Code picks up new skills automatically; if it doesn't appear, run `/reload-skills`. (Paths per the [Claude Code skills docs](https://code.claude.com/docs/en/skills).)

### Claude Code plugin

This repo is also a plugin marketplace. In Claude Code:

```
/plugin marketplace add joeltcampbell-art/handoff_kit
/plugin install handoff-kit@handoff-kit
```

Install was tested from a local clone (`claude plugin marketplace add ./`). Install straight from GitHub hasn't been tested yet.

### Claude app (untested)

Per [Anthropic's help article](https://support.claude.com/en/articles/12512180-using-skills-in-claude-ai): zip the `skills/handoff-kit` folder (the folder itself at the top of the zip, with `SKILL.md` inside it), then in Claude go to **Customize > Skills**, click **+**, choose **Create skill > Upload a skill**, and upload the zip. Code execution must be on. **This route has not been tested.**

## Usage

In the folder that contains your project, ask:

> Create a handoff kit for sample-project

You don't need to name the skill; Claude uses it when you ask for handoff docs. See [`examples/sample-output/`](examples/sample-output/) for the real, unedited output from running that prompt against the invented [`sample-project/`](sample-project/).

## Safety rules

The skill tells Claude to:

- **Never output secret values.** Only environment variable *names* appear in the kit.
- **Never open real environment files** (`.env`, `.env.local`, `.env.production`, …). Names come from `.env.example`, config and code. If only a real `.env` exists, Claude asks you for the names.
- **Never invent** features, services, hosts or test results. Anything essential with no evidence is marked *"Not found in project — confirm with builder."*
- **Ask before overwriting** an existing `handoff/` folder.
- Keep each document to about 600 words.

`sample-project/.env.local` holds **fake, planted values** (marked `LEAKTEST`) used to check that none of them ever reach the output. They are not real credentials.

## Author

Joel C., Lens Intelligence LLC. MIT License.
