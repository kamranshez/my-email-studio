# Skills I chose

Searched skills.sh on 2026-11-07 with `npx skills find` for "email marketing", "email sequence", "campaign plan" and "resend". Star counts come from GitHub on the same day. Nothing is installed yet.

## Use these

**For writing campaigns: `anthropics/knowledge-work-plugins`** (35,048 stars, Apache-2.0)
Anthropic publishes this one, and Anthropic makes Claude. It has both `campaign-plan` (3.4K installs) and `email-sequence` (3K installs), so one trusted source covers planning the VCAgents launch and drafting the emails. The repo was updated today.

**For sending email: `resend/resend-skills`** (211 stars, MIT)
Resend publishes this itself, and Resend is the service this studio sends through. The `resend` skill (24.3K installs) and `resend-cli` (13.9K) come straight from the company that runs the API, so they should match how it really works. The star count is low, but the publisher is the official one, and that matters more here. Resend's own `email-best-practices` (147 stars) is a possible extra later.

## Avoid these

**`caffeinelabs/skills@extension-email-marketing`**: it's the top result for "email marketing" with 30.4K installs, but its GitHub repo has only 2 stars. When installs and stars don't match like that, the install count may be inflated or automated. Also, nobody well known stands behind it.

**`claude-office-skills/skills@email-marketing`**: the name makes it sound like it comes from Claude or Anthropic. It doesn't. It's an unrelated organisation, and the repo hasn't been updated since January 2026. A borrowed-sounding name plus no recent upkeep is a reason to stay away.

(Also skip the third-party Resend wrappers such as `membranedev/application-skills@resend` and `okou-ai/okou-skills@resend`. They have no license, and Resend's own skill does the same job.)

## How I decided

Check these three things before installing any skill:

1. **Who publishes it.** Is the owner the real company behind the tool (anthropics, resend) or a well-known maintainer? Is the name only copying an official one?
2. **Whether the numbers agree.** Stars, installs and recent commits should roughly match. Lots of installs with almost no stars, or a repo nobody has touched in months, is a warning sign.
3. **What it actually does.** Read the SKILL.md and any scripts before installing. Look for commands it runs, network calls, or anything that touches credentials or sends email. Also check that it has a license.
