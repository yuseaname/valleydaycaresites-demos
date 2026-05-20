# System Reference

> Quick access to all SaaS tools and resources for ValleyDaycareSites.

---

## SaaS Tools

### Blue.cc — Project Management

| Item | Value |
|------|-------|
| Console | https://blue.cc |
| Organization | valleydaycaresitescom |
| Project | ValleyDaycareSites Development |
| Jitori Email | jitori@agentmail.to |
| Edgar Email | yuseaname@gmail.com |

**Full Docs:** `~/.openclaw/saas-library/blue/README.md`

**AI Operator Guide:** `~/.openclaw/skills/blue-cc/SKILL.md`

---

### Consolto — Customer Communication

| Item | Value |
|------|-------|
| Login | https://app.consolto.com/login |
| Widget ID | `4f4e9c9b-da8d-47d1-a594-2c9b79070de9` |
| Site | valleydaycaresites.com |
| Agent Handle | edgar.rangel7813 |

**Full Docs:** `~/.openclaw/saas-library/consolto/`

**Features:**
- Video chat
- Live chat
- Appointment scheduling
- Payment collection
- Lead capture

---

### EmailWritr — Email Copywriting

| Item | Value |
|------|-------|
| Login | https://emailwritr.com/login |
| Account | yuseaname@gmail.com |
| Plan | Expert Lifetime |
| Usage | 52K emails / 10K pages |

**Full Docs:** `~/.openclaw/saas-library/emailwritr/`

**Use for:**
- Cold outreach emails
- Follow-up sequences
- Nurture campaigns

---

### AgentMail — Email Infrastructure

| Item | Value |
|------|-------|
| Console | https://console.agentmail.to |
| Inbox | jitori@agentmail.to |
| API Docs | https://docs.agentmail.to |

**Full Docs:** `~/.openclaw/saas-library/agentmail/`

**Use for:**
- Sending outreach emails
- Receiving replies
- Email verification codes

---

### Unibee — Subscription Billing

| Item | Value |
|------|-------|
| Console | https://app.unibee.dev/home |
| API | https://api.unibee.dev/v1 |

**Full Docs:** `~/.openclaw/saas-library/unibee/`

**Pricing Plans:**
| Plan | Price | Duration |
|------|-------|----------|
| Free Sample | $0 | 48-hour trial |
| Monthly Hosting | $50/month | Recurring |

---

## Site Configuration

From `~/.openclaw/domains/site-registry.json`:

```json
{
  "domain": "valleydaycaresites.com",
  "niche": "Daycare websites and childcare services",
  "revenueModel": "client-services",
  "repoPath": "/mnt/ai-shared/workspace/repos/valleydaycaresites.com",
  "githubRepo": "yuseaname/valleydaycaresites.com",
  "deployMethod": "github-actions-rsync",
  "framework": "static-html",
  "contentEmpire": false,
  "language": "en"
}
```

---

## Blue.cc API Quick Reference

```bash
# Check authentication
python3 ~/.openclaw/workspace/scripts/blue-api.py user

# List todo lists
python3 ~/.openclaw/workspace/scripts/blue-api.py todolists

# Get tasks assigned to Jitori
python3 ~/.openclaw/workspace/scripts/blue-api.py assigned jitori@agentmail.to

# Create a new task
python3 ~/.openclaw/workspace/scripts/blue-api.py create "Task title"

# Mark task as completed
python3 ~/.openclaw/workspace/scripts/blue-api.py complete <task_id>
```

---

## Auth Vault

Credentials are stored securely. Access via:

```bash
# List available auth profiles
agent-browser auth list

# Show specific credentials
agent-browser auth show consolto
agent-browser auth show emailwritr
agent-browser auth show unibee
```

---

*Last updated: 2026-03-30*
