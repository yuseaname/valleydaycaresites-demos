# Outreach System

> Cold email campaigns and lead management for ValleyDaycareSites.

---

## Outreach Philosophy

- **Personalized**: Each email feels personal, not templated
- **Value-first**: Lead with benefits, not features
- **Low-pressure**: Soft CTAs, no hard selling
- **Respectful**: Honor unsubscribe requests immediately

---

## Campaign Structure

### Sequence Overview

| Email | Timing | Purpose |
|-------|--------|---------|
| 1 — Initial | Day 0 | Introduction + value proposition |
| 2 — Follow-up | Day 3 | Gentle reminder |
| 3 — Value-add | Day 7 | Free resource / tip |
| 4 — Final | Day 14 | Last attempt + archive |

---

## Folder Structure

```
outreach/
├── README.md              # This file
├── campaigns/             # Active and past campaigns
│   ├── 2026-q2-launch/    # Campaign folder
│   │   ├── sequence.md    # Email sequence
│   │   ├── results.md     # Performance metrics
│   │   └── leads.json     # Leads in this campaign
│   └── ...
├── leads/                 # Lead database
│   ├── prospects.json     # Potential clients
│   ├── contacted.json     # Reached out to
│   ├── responded.json     # Showed interest
│   └── unsubscribed.json  # Opted out
└── templates/             # Reusable email templates
    ├── cold-outreach.md
    ├── follow-up.md
    ├── value-add.md
    └── final-attempt.md
```

---

## Lead Sources

1. **Google Maps** — Search "daycare near [city]"
2. **Yelp** — Browse daycare listings
3. **State licensing databases** — Licensed facilities
4. **Referrals** — From existing clients
5. **Social media** — Instagram, Facebook pages

---

## Lead Qualification Criteria

| Criteria | Must Have |
|----------|-----------|
| Has a physical location | Yes |
| Currently operating | Yes |
| Does NOT have a professional website | Yes |
| Has contact email available | Yes |

**Disqualifiers:**
- Chain/franchise (corporate handles marketing)
- Already has a modern website
- Out of business
- Unlicensed operation

---

## Email Sending via AgentMail

```python
from agentmail import AgentMail

client = AgentMail()

# Send outreach email
client.inboxes.messages.send(
    inbox_id="jitori@agentmail.to",
    request={
        "to": "daycare@example.com",
        "subject": "Professional Website for Your Daycare",
        "html": email_html,
        "text": "Plain text version..."
    }
)
```

---

## Tracking Metrics

| Metric | Target | Track In |
|--------|--------|----------|
| Emails sent/week | 25+ | AgentMail |
| Open rate | 30%+ | AgentMail |
| Response rate | 5%+ | Manual |
| Consultation bookings | 10% of responses | Consolto |
| Conversion rate | 20% of consultations | Unibee |

---

## Compliance

- Include unsubscribe link in every email
- Honor unsubscribe requests within 24 hours
- Keep records of consent
- Follow CAN-SPAM Act requirements

---

*Last updated: 2026-03-30*
