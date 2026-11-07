# My Email Studio

A small studio for planning and writing email campaigns with Claude Code.

It is built for **VCAgents**, a business that makes AI voice agents for call centers. The agents work with VICIdial, Asterisk, FreeSWITCH, OpenSIPS and Kamailio.

This project is part of the Email Studio Lab course. See [ASSIGNMENT.md](ASSIGNMENT.md) for all 15 steps.

> **No real emails are sent from here.** We only plan and draft. All lead data is sample data.

## What's inside

| Folder or file | What it holds |
|---|---|
| `brand/voice.md` | Our brand voice: tone, words we use, words we avoid, and claims we never make. |
| `leads/leads.csv` | Sample leads, sorted into three groups. |
| `campaigns/vcagents-launch/` | The launch campaign: the plan, 4 emails, and a version of each email for every lead group. |
| `notes/` | Working notes and ideas. |
| `CLAUDE.md` | The rules Claude follows in this studio. |
| `.claude/rules/emails.md` | The format every email file must follow. |
| `.claude/skills/personalize/` | A skill that writes one version of each email per lead group. |

## The launch campaign

**"Live on Your Dialer"** invites our waitlist to book a demo. It runs from 7 Dec 2026 to 3 Jan 2027.

The four emails:

1. **VCAgents is live**: the launch announcement.
2. **How it plugs in**: how it connects to your phone system.
3. **Cover the gaps**: overflow and after-hours calls.
4. **Your questions answered**: AI disclosure, call quality, concurrent calls and pricing.

Each email also has a version for every lead group:

- **call-center-owners**: people who run dialers and agent floors.
- **voip-sip-providers**: people who sell SIP trunks and PBX services.
- **digital-marketers**: people who run outbound and lead follow-up campaigns.

## Email rules

Every email file must have:

- A subject line of 50 characters or fewer, and a preview line of 90 or fewer.
- A greeting that uses `{{first_name}}`.
- Exactly one link: `https://vcagents.example/vcagents`.
- The sign-off "Talk soon, The VCAgents Team".
- A two-line plain-text footer with the address and an unsubscribe link.

## Using the personalize skill

In Claude Code, run:

```
/personalize vcagents-launch
```

It reads the final emails, the lead groups, the brand voice and the email rules. Then it writes each new version to `campaigns/<campaign>/groups/<group>/emails/`.

Each version changes only two things: the opening line and one example. Everything else stays the same.

## Studio rules

1. Write in plain English.
2. Never send email to real people.
3. Ask before deleting anything.
