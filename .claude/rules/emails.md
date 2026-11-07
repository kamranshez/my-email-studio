---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

These rules apply to every email file in any campaign's `emails/` folder.

Each email file must:

1. **Start with the subject and preview.**
   - Line 1: `Subject: ...` of 50 characters or fewer.
   - Line 2: `Preview: ...` of 90 characters or fewer.
2. **Greet the reader by name** using `{{first_name}}`, for example "Hi {{first_name}},".
3. **Have exactly one main link**, written like this:
   `[Button text](https://vcagents.example/vcagents)`
   Change the button text to fit the email. Keep the link the same. No other links.
4. **End with our sign-off** from brand/voice.md:

   Talk soon,
   The VCAgents Team

5. **Then add this two-line footer** as plain text. Do not put it inside a code block:

   You're getting this because you joined the VCAgents waitlist.
   VCAgents, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

Nothing else goes in the file: no extra subject options, no notes section.
