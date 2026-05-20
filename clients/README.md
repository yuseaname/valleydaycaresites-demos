# Client Projects

> Each client gets their own isolated folder with all project materials.

---

## Folder Structure

```
clients/
└── [client-slug]/
    ├── brief.md          # Initial requirements and scope
    ├── contract.md       # Agreement details (if applicable)
    ├── assets/           # Client-provided materials
    │   ├── logo.png
    │   ├── photos/
    │   └── content/
    ├── website/          # Website source files
    ├── subdomain/        # Preview subdomain (e.g., client.valleydaycaresites.com)
    ├── communications.md # Log of all client interactions
    └── status.md         # Current project status
```

---

## Client Slug Naming Convention

Use lowercase, hyphenated names based on the daycare name:

| Daycare Name | Client Slug |
|--------------|-------------|
| Sunshine Daycare | `sunshine-daycare` |
| Little Angels Preschool | `little-angels-preschool` |
| Happy Kids Learning Center | `happy-kids-learning-center` |

---

## Status Tracking

Each client's `status.md` should include:

```markdown
# [Client Name] — Status

## Current Phase
- [ ] Onboarding
- [ ] Design
- [ ] Development
- [ ] Review
- [ ] Live
- [ ] On Hold
- [ ] Churned

## Subscription
- Plan: Free Sample / Monthly Hosting
- Start Date: YYYY-MM-DD
- Billing Status: Active / Past Due / Canceled

## Key Dates
- Contract Signed: YYYY-MM-DD
- Site Live: YYYY-MM-DD
- Last Update: YYYY-MM-DD

## Notes
[Current notes]
```

---

## Adding a New Client

1. Create folder: `clients/[client-slug]/`
2. Create `brief.md` with initial requirements
3. Create `assets/` folder for client materials
4. Create `status.md` with initial status
5. Add to Blue.cc project tracking
6. Create subscription in Unibee (Free Sample first)

---

*Last updated: 2026-03-30*
