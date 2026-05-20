# Website Templates

> Pre-built website templates for quick client deployment.

---

## Template Philosophy

- **Simple**: Easy for daycare owners to understand and update
- **Mobile-first**: Most parents browse on phones
- **Fast**: Sub-3 second load times
- **Conversion-focused**: Clear CTAs for tours and inquiries

---

## Available Templates

### 1. Classic Daycare

| Feature | Description |
|---------|-------------|
| Style | Warm, family-friendly |
| Colors | Soft pastels, primary colors |
| Hero | Large photo + headline |
| Sections | Programs, About, Testimonials, Contact |
| Best for | Traditional daycares, preschools |

```
templates/classic-daycare/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── placeholder/
```

### 2. Modern Learning Center

| Feature | Description |
|---------|-------------|
| Style | Clean, educational |
| Colors | Bright accent colors |
| Hero | Video/slideshow option |
| Sections | Curriculum, Staff, Gallery, Enroll |
| Best for | Learning centers, STEM programs |

```
templates/modern-learning/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── placeholder/
```

### 3. Home Daycare

| Feature | Description |
|---------|-------------|
| Style | Cozy, personal |
| Colors | Warm earth tones |
| Hero | Personal welcome message |
| Sections | About, Daily Schedule, Meals, Rates, Contact |
| Best for | In-home daycares, small operations |

```
templates/home-daycare/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── placeholder/
```

---

## Required Sections (All Templates)

Every template must include:

1. **Hero Section**
   - Daycare name
   - Tagline
   - CTA button (Schedule Tour / Contact Us)

2. **Programs**
   - Age groups served
   - Program descriptions
   - Hours of operation

3. **About**
   - Owner/director intro
   - Philosophy
   - Experience/qualifications

4. **Testimonials** (optional but recommended)
   - Parent quotes
   - Star ratings

5. **Contact**
   - Phone number
   - Email
   - Address with Google Maps
   - Contact form

6. **Footer**
   - Social links
   - License info
   - Copyright

---

## Consolto Integration

All templates must include Consolto widget:

```html
<!-- Add before </body> -->
<div id="et-iframe" data-widgetid="4f4e9c9b-da8d-47d1-a594-2c9b79070de9"></div>
<script src="https://client.consolto.com/iframeApp/iframeApp.js"></script>
```

---

## Mobile Requirements

- Hamburger menu navigation
- Touch-friendly buttons (min 44px tap targets)
- Fast loading images (WebP, lazy loading)
- Click-to-call phone numbers
- Google Maps embed

---

## SEO Requirements

Each template must have:

```html
<title>[Daycare Name] | [City] Daycare & Preschool</title>
<meta name="description" content="[155-char description]">
<meta name="keywords" content="daycare, preschool, [city], childcare">

<!-- Schema.org markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ChildCare",
  "name": "[Daycare Name]",
  "address": {...},
  "telephone": "...",
  "openingHours": "..."
}
</script>
```

---

## Creating a New Template

1. Create folder: `templates/[template-name]/`
2. Include: `index.html`, `css/`, `js/`, `assets/`
3. Add placeholder images in `assets/placeholder/`
4. Document in this README
5. Test on mobile devices

---

*Last updated: 2026-03-30*
