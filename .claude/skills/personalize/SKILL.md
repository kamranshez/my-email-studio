---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize a campaign for each lead group

Campaign folder: $ARGUMENTS

## Step 1: Check the campaign folder

- If no campaign folder was given above, **stop**. Use Glob on `campaigns/*/` to find the campaign folders. Reply with this list and ask which one to use. Do not write any files.
- If a folder was given but it has no `emails/*.md` files, stop. Say so and list the campaign folders that do exist.
- Accept the folder as a full path (`campaigns/vcagents-launch`) or just a name (`vcagents-launch`).

## Step 2: Read what you need

1. Every email in `<campaign folder>/emails/*.md`. Skip anything inside `groups/`.
2. `leads/leads.csv`. Find the lead groups from the `group` column. Use each unique value. Today these are `call-center-owners`, `voip-sip-providers` and `digital-marketers`. Read only the group names. Do not copy any names or email addresses into the emails.
3. `brand/voice.md` for our voice, words to avoid, and claims we must never make.
4. `.claude/rules/emails.md` for the rules every email file must follow.
5. `<campaign folder>/plan.md`, if it exists, for the campaign goal.

## Step 3: Write one version per email per group

For each group, and for each email, write a new version. Keep almost everything the same.

**Keep exactly the same:**

- The `Subject:` and `Preview:` lines.
- The greeting (`Hi {{first_name}},`).
- The order of sections, headings and bullet lists.
- The one link: same button text, same URL.
- The sign-off and the two-line footer, word for word.

**Change only two things:**

1. **The opening line** (the first line after the greeting). Make it speak to that group.
2. **One example** in the body. Pick one example, bullet or sentence and swap it for one that fits the group better. Change only that one.

**How to fit each group:**

- **call-center-owners:** They run dialers and agent floors. Talk about busy floors, overflow, after-hours cover, agent time and VICIdial campaigns.
- **voip-sip-providers:** They run SIP trunks and PBX services for their own customers. Talk about Asterisk, FreeSWITCH, OpenSIPS or Kamailio, concurrent calls, and a service they can offer on top of their trunks.
- **digital-marketers:** They run outbound and lead follow-up campaigns. They may not know telephony. Talk about speed to lead, following up on form fills, and campaign results. Explain any phone term in plain words.
- **Any other group** in the file: work out who they are from the group name and fit the same way.

**Stay on brand:**

- Plain English. Short sentences. Calm, factual, no hype.
- Never use the words in the "Words we avoid" table in `brand/voice.md`.
- Never make the "Claims we must never make". Do not add new numbers or results that the original email did not have.
- If the original says callers are told they are speaking to AI, keep that.

## Step 4: Save the files

Save each version to:

`<campaign folder>/groups/<group>/emails/<same file name>`

Example: `campaigns/vcagents-launch/groups/digital-marketers/emails/01-vcagents-is-live.md`

If a file already exists there, overwrite it with the new version. Never delete any file. Never send, schedule or forward any email.

## Step 5: Reply with a short summary only

Reply with nothing else but:

- How many files you wrote (for example, "Wrote 12 files: 4 emails × 3 groups.").
- One example opening line per group, taken from the first email.

Keep it short. Do not paste the full emails.
