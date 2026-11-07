Subject: How VCAgents plugs into VICIdial
Preview: The setup in plain steps, plus Asterisk, FreeSWITCH, OpenSIPS and Kamailio.

Hi {{first_name}},

A question we hear a lot from floor owners: "How hard is it to set up on VICIdial?"

Here is the short answer. **VCAgents connects over SIP**, the same way your dialer already talks to a SIP trunk. You don't swap out your phone system. You add VCAgents as one more place to send calls.

**On VICIdial**

1. Add VCAgents as a SIP carrier.
2. Point the in-group's After Hours Action or Drop Action at it.
3. Make a test call and check the call log.

**On Asterisk or FreeSWITCH**

Add VCAgents as a SIP peer or gateway. Then send the calls you choose to it from your dialplan.

**On OpenSIPS or Kamailio**

Add VCAgents as a destination in your routing logic. Your proxy sends it the calls you pick, just like any other SIP endpoint.

**New to the phone side?** In plain words: your phone system passes the calls your team can't take to VCAgents, the way it would pass a call to another line. Your agents still get the calls they can answer.

Every setup is a little different. On a demo we'll walk through the exact steps for your VICIdial campaigns and in-groups.

[Book a demo](https://vcagents.example/vcagents)

Talk soon,
The VCAgents Team

You're getting this because you joined the VCAgents waitlist.
VCAgents, {{company_address}} · Unsubscribe: {{unsubscribe_url}}
