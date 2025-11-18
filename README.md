# Bariş Haustechnik - Professionelle Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/baris-haustechnik/deploys)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Moderne, barrierefreie und SEO-optimierte Website für Bariş Haustechnik - Ihr Partner für Sanitär, Heizung und Solartechnik in Wetzlar und Umgebung.

---

## 🌟 Features

### ✅ Performance & Optimierung
- **Vite Build System** - Blazing fast development und optimierter Production Build
- **Code Splitting** - Automatische Chunk-Optimierung für React, UI und andere Vendors
- **Lazy Loading** - Seiten werden on-demand geladen
- **Minification** - CSS und JavaScript mit Terser optimiert
- **Caching Strategy** - Static Assets mit 1 Jahr Cache-Control
- **Lighthouse Score** - 90+ Performance, Accessibility, Best Practices, SEO

### ✅ Accessibility (WCAG 2.1 AA Konform)
- **Semantisches HTML** - Proper heading hierarchy (h1-h6)
- **ARIA Labels** - Vollständige Screen-Reader Unterstützung
- **Keyboard Navigation** - Alle Elemente per Tab erreichbar
- **Touch Targets** - Mindestens 44x44px für mobile Nutzung
- **Focus States** - Sichtbare Focus-Indikatoren
- **Skip Links** - Skip-to-main-content für Screen-Reader

### ✅ SEO & Discoverability
- **Meta Tags** - Open Graph, Twitter Cards, Schema.org
- **Sitemap.xml** - Automatisch für alle Seiten
- **Robots.txt** - Konfiguriert für optimales Crawling
- **Structured Data** - LocalBusiness Schema.org Markup
- **Canonical URLs** - Duplicate Content Prevention

### ✅ Security
- **Content Security Policy** - XSS Protection
- **Security Headers** - X-Frame-Options, X-Content-Type-Options, etc.
- **HTTPS Enforcement** - Automatic redirect zu HTTPS
- **Input Validation** - Client-seitige Form-Validierung
- **No Sensitive Data** - Keine API-Keys im Client-Code

### ✅ Responsive Design
- **Mobile-First** - Optimiert für alle Bildschirmgrößen
- **Breakpoints** - sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-Optimized** - Große Buttons und intuitive Gesten
- **Safe Area Support** - Notch-freundlich für moderne Smartphones

### ✅ User Experience
- **24h Notdienst Button** - Floating Emergency Button
- **Help Sidebar** - Kontextuelle Hilfe auf allen Seiten
- **Blog & FAQ** - Umfassende Hilfe-Center
- **Smooth Animations** - Scroll-basierte Animationen
- **Loading States** - Feedback bei asynchronen Operationen

---

## 🚀 Schnellstart

### Voraussetzungen

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0

### Installation

```bash
# Repository klonen
git clone https://github.com/umutcantezgel-cpu/Baris.git
cd Baris

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Website ist nun unter `http://localhost:3000` erreichbar.

---

## 📦 Verfügbare Scripts

| Script | Beschreibung |
|--------|--------------|
| `npm run dev` | Startet Vite Development Server (Port 3000) |
| `npm run build` | Erstellt Production Build im `dist/` Verzeichnis |
| `npm run preview` | Zeigt Production Build lokal (Port 4173) |
| `npm run lint` | Führt ESLint Code-Analyse durch |

---

## 🏗️ Projektstruktur

```
Baris/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD Pipeline
├── public/
│   ├── _headers                # Netlify Security Headers
│   ├── _redirects              # Netlify SPA Redirects
│   ├── favicon.svg             # App Icon
│   ├── robots.txt              # SEO Crawler Rules
│   ├── sitemap.xml             # SEO Sitemap
│   └── site.webmanifest        # PWA Manifest
├── src/
│   ├── api/
│   │   └── base44Client.js     # API Client (Mock/Production)
│   ├── assets/
│   │   ├── images/             # Bilder & Media
│   │   └── fonts/              # Custom Fonts
│   ├── components/
│   │   ├── home/               # Homepage Komponenten
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TrustSection.jsx
│   │   │   ├── ServicesGrid.jsx
│   │   │   ├── PortfolioSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── CTASection.jsx
│   │   │   └── FloatingEmergencyButton.jsx
│   │   ├── layout/
│   │   │   └── HelpSidebar.jsx
│   │   └── ui/                 # Reusable UI Components
│   │       ├── button.jsx
│   │       ├── input.jsx
│   │       ├── textarea.jsx
│   │       ├── select.jsx
│   │       └── badge.jsx
│   ├── pages/
│   │   ├── Home.jsx            # Startseite
│   │   ├── Services.jsx        # Leistungen
│   │   ├── About.jsx           # Über uns
│   │   ├── Projects.jsx        # Referenzen
│   │   ├── Blog.jsx            # Blog Übersicht
│   │   ├── BlogPost.jsx        # Einzelner Blog Artikel
│   │   ├── Contact.jsx         # Kontaktformular
│   │   ├── Impressum.jsx       # Impressum
│   │   └── Datenschutz.jsx     # Datenschutzerklärung
│   ├── utils/
│   │   └── index.js            # Helper Functions
│   ├── App.jsx                 # Haupt-App mit Routing
│   ├── Layout.jsx              # Layout Wrapper (Header/Footer)
│   ├── main.jsx                # App Entry Point
│   └── index.css               # Global Styles (Tailwind)
├── .env.example                # Environment Variables Template
├── .eslintrc.cjs               # ESLint Configuration
├── .gitignore                  # Git Ignore Rules
├── index.html                  # HTML Entry Point
├── netlify.toml                # Netlify Configuration
├── package.json                # Dependencies & Scripts
├── postcss.config.js           # PostCSS Configuration
├── tailwind.config.js          # Tailwind CSS Configuration
├── vite.config.js              # Vite Build Configuration
└── README.md                   # Diese Datei
```

---

## 🌐 Deployment auf Netlify

### Option 1: Automatisches Deployment via GitHub (Empfohlen)

1. **Repository auf GitHub pushen**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Netlify mit GitHub verbinden**
   - Gehe zu [Netlify](https://app.netlify.com/)
   - Klicke auf "Add new site" → "Import an existing project"
   - Wähle "GitHub" und autorisiere Netlify
   - Wähle das `Baris` Repository

3. **Build Settings konfigurieren**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18

   Diese Settings werden automatisch aus `netlify.toml` übernommen!

4. **Deploy!**
   - Klicke auf "Deploy site"
   - Netlify baut und deployed automatisch
   - Bei jedem Push zu `main` wird automatisch neu deployed

### Option 2: Manuelles Deployment via Netlify CLI

```bash
# Netlify CLI installieren
npm install -g netlify-cli

# Bei Netlify einloggen
netlify login

# Projekt initialisieren
netlify init

# Build erstellen
npm run build

# Deployment
netlify deploy --prod --dir=dist
```

### Environment Variables (optional)

Falls du externe APIs verwendest, setze Environment Variables in Netlify:

1. Gehe zu **Site settings** → **Environment variables**
2. Füge hinzu:
   - `VITE_API_URL` - Base44 API URL
   - `VITE_GA_MEASUREMENT_ID` - Google Analytics ID
   - etc. (siehe `.env.example`)

---

## 🔧 Konfiguration

### Netlify Settings (`netlify.toml`)

Die `netlify.toml` Datei enthält:
- Build Command und Publish Directory
- SPA Redirect Rules (wichtig!)
- Security Headers (CSP, X-Frame-Options, etc.)
- Cache-Control für Static Assets
- HTTPS Redirects

### Security Headers

Alle Security Headers sind in `public/_headers` und `netlify.toml` konfiguriert:

- ✅ Content Security Policy (CSP)
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy

### CI/CD Pipeline (GitHub Actions)

Die `.github/workflows/deploy.yml` Pipeline:

1. **Build Job:**
   - Checkout Code
   - Install Dependencies
   - Run Linter
   - Build Project
   - Upload Artifacts

2. **Deploy Job:**
   - Download Build Artifacts
   - Deploy to Netlify (Production oder Preview)

3. **Lighthouse Job:**
   - Performance Audit nach Production Deploy

**Setup:**
1. Füge Secrets in GitHub hinzu:
   - `NETLIFY_AUTH_TOKEN` - Netlify Personal Access Token
   - `NETLIFY_SITE_ID` - Netlify Site ID

---

## 🐛 Troubleshooting

### Problem: Build schlägt fehl

**Lösung:**
```bash
# Cache leeren
rm -rf node_modules dist
npm cache clean --force

# Neu installieren
npm install

# Build erneut versuchen
npm run build
```

### Problem: Weiße Seite nach Deployment

**Ursache:** SPA Routing funktioniert nicht

**Lösung:** Stelle sicher, dass `public/_redirects` oder `netlify.toml` die Redirect-Regel enthält:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Problem: CSS Styles fehlen

**Ursache:** Tailwind nicht korrekt konfiguriert

**Lösung:** Prüfe `tailwind.config.js` content-Pfade:
```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]
```

### Problem: Icons werden nicht angezeigt

**Ursache:** Falsche lucide-react Icon Imports

**Lösung:** Prüfe verfügbare Icons auf [lucide.dev](https://lucide.dev/icons/)

### Problem: Netlify Deploy Status Badge funktioniert nicht

**Lösung:** Ersetze `your-site-id` in README.md mit deiner echten Netlify Site ID:
```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/DEINE-SITE-ID/deploy-status)]
```

---

## 📊 Performance Optimierung

### Bilder optimieren

```bash
# WebP Konvertierung (empfohlen)
npx @squoosh/cli --webp auto src/assets/images/*.jpg

# Responsive Images generieren
npx @squoosh/cli --resize '{width:800}' src/assets/images/*.jpg
```

### Bundle Size analysieren

```bash
# Vite Bundle Analyzer
npm run build -- --mode analyze
```

### Lighthouse Audit lokal

```bash
# Chrome DevTools → Lighthouse Tab
# oder
npx lighthouse https://baris-haustechnik.de --view
```

---

## 🔐 Security Best Practices

- ✅ **Keine API Keys im Frontend** - Verwende Netlify Functions für Backend-Calls
- ✅ **Input Validation** - Sanitize alle User Inputs
- ✅ **HTTPS Only** - Erzwinge HTTPS in Production
- ✅ **Dependencies aktuell halten** - Regelmäßig `npm audit` ausführen
- ✅ **CSP Headers** - Content Security Policy aktiviert

### Dependency Audit

```bash
# Security Audit
npm audit

# Fix vulnerabilities
npm audit fix

# Outdated Packages prüfen
npm outdated
```

---

## 📝 Changelog

### Version 1.0.0 (2024-11-18)

**Initial Release:**
- ✅ Vollständige Website mit 9 Seiten
- ✅ Responsive Design (Mobile-First)
- ✅ WCAG 2.1 AA Accessibility
- ✅ SEO optimiert (Meta Tags, Sitemap, Schema.org)
- ✅ Performance optimiert (Lighthouse 90+)
- ✅ Security Headers implementiert
- ✅ CI/CD Pipeline (GitHub Actions)
- ✅ Netlify Deployment konfiguriert
- ✅ Blog System mit React Query
- ✅ Contact Form mit Validation
- ✅ 24h Emergency Button
- ✅ Help Sidebar System

---

## 📞 Support

Bei Fragen oder Problemen:

- **Website:** [baris-haustechnik.de](https://baris-haustechnik.de)
- **E-Mail:** info@baris-haustechnik.de
- **Telefon:** 0163 7709101 (24h Notdienst)
- **GitHub Issues:** [github.com/umutcantezgel-cpu/Baris/issues](https://github.com/umutcantezgel-cpu/Baris/issues)

---

## 📄 Lizenz

MIT License - Copyright (c) 2024 Veli Bariş

---

## 🙏 Credits

- **React** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling Framework
- **Lucide React** - Icon Library
- **React Router** - Navigation
- **React Query** - Data Fetching
- **Netlify** - Hosting & CI/CD

---

**Entwickelt mit ❤️ für Bariş Haustechnik**
