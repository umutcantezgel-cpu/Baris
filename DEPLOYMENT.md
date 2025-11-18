# 🚀 Deployment-Anleitung für Bariş Haustechnik Website

Umfassende Anleitung für das Deployment der Website auf Netlify mit CI/CD Integration.

---

## 📋 Pre-Deployment Checklist

Vor dem ersten Deployment diese Punkte prüfen:

### ✅ Code & Build

- [ ] Alle Dateien commited (`git status` sollte "clean" sein)
- [ ] `npm install` läuft ohne Fehler
- [ ] `npm run build` erstellt erfolgreich `dist/` Ordner
- [ ] `npm run preview` zeigt Website korrekt an
- [ ] Keine ESLint Fehler (`npm run lint`)
- [ ] Keine Security Vulnerabilities (`npm audit --omit=dev`)

### ✅ Content & SEO

- [ ] Alle Texte auf Rechtschreibung geprüft
- [ ] Meta Tags in `index.html` angepasst
- [ ] Firmen-Logo/Bilder in `public/` hochgeladen
- [ ] `sitemap.xml` URLs aktualisiert
- [ ] `robots.txt` konfiguriert
- [ ] Schema.org Daten in `index.html` geprüft

### ✅ Konfiguration

- [ ] `netlify.toml` vorhanden
- [ ] `public/_redirects` konfiguriert
- [ ] `public/_headers` Security Headers gesetzt
- [ ] `.env.example` dokumentiert (falls Environment Variables benötigt)

### ✅ Legal & Compliance

- [ ] Impressum (Name, Adresse, Kontakt) aktualisiert
- [ ] Datenschutzerklärung vollständig
- [ ] Umsatzsteuer-ID eingetragen (falls vorhanden)
- [ ] Cookie-Banner implementiert (falls Cookies verwendet)

---

## 🌐 Option 1: Deployment via Netlify Dashboard (GUI)

### Schritt 1: Netlify Account erstellen

1. Gehe zu [netlify.com](https://www.netlify.com/)
2. Klicke auf **Sign up** → Wähle "Sign up with GitHub"
3. Autorisiere Netlify für GitHub Zugriff

### Schritt 2: Neues Site erstellen

1. Klicke auf **"Add new site"** → **"Import an existing project"**
2. Wähle **GitHub** als Git Provider
3. Suche und wähle das **"Baris"** Repository
4. Klicke auf **"Configure Netlify"** falls weitere Berechtigungen nötig

### Schritt 3: Build Settings konfigurieren

Netlify sollte automatisch aus `netlify.toml` lesen, aber zur Sicherheit:

| Setting | Value |
|---------|-------|
| **Base directory** | (leer lassen) |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Functions directory** | `netlify/functions` (optional) |

**Advanced Build Settings:**
- **Node version:** 18 (wird aus `netlify.toml` gelesen)
- **Environment variables:** Hier später hinzufügen (siehe unten)

### Schritt 4: Deploy!

1. Klicke auf **"Deploy site"**
2. Netlify startet Build (Dauer: ~1-2 Minuten)
3. Nach erfolg zeigt Netlify: ✅ **"Site is live"**
4. Deine Site ist verfügbar unter: `https://random-name-12345.netlify.app`

### Schritt 5: Custom Domain einrichten (optional)

1. Gehe zu **Site settings** → **Domain management**
2. Klicke auf **"Add custom domain"**
3. Gib deine Domain ein: `baris-haustechnik.de`
4. Folge den DNS-Anweisungen:
   - **A Record:** Zeigt auf Netlify Load Balancer IP
   - **CNAME Record:** `www` zeigt auf `random-name-12345.netlify.app`
5. Warte auf DNS Propagation (~5-60 Minuten)
6. Netlify aktiviert automatisch **HTTPS** (Let's Encrypt)

---

## 💻 Option 2: Deployment via Netlify CLI (Terminal)

### Schritt 1: Netlify CLI installieren

```bash
# Global installieren
npm install -g netlify-cli

# Oder mit npx (temporär)
npx netlify-cli
```

### Schritt 2: Bei Netlify einloggen

```bash
netlify login
```

Dies öffnet Browser → Autorisiere Netlify CLI

### Schritt 3: Projekt initialisieren

```bash
# Im Projekt-Verzeichnis
cd /path/to/Baris

# Site erstellen und verknüpfen
netlify init
```

**Fragen beantworten:**
1. **"Create & configure a new site"** → YES
2. **Team:** Wähle dein Team
3. **Site name:** `baris-haustechnik` (oder Wunschname)
4. **Build command:** `npm run build`
5. **Publish directory:** `dist`

Netlify erstellt `.netlify/state.json` mit Site ID.

### Schritt 4: Build & Deploy

```bash
# Lokalen Build erstellen
npm run build

# Deploy als Draft (Preview)
netlify deploy --dir=dist

# Deploy zu Production
netlify deploy --prod --dir=dist
```

**Output:**
```
✔ Deploy is live!

Unique Deploy URL: https://6565a12b3c4d5e6f7a8b9c0d--baris-haustechnik.netlify.app
Website URL:       https://baris-haustechnik.netlify.app
```

### Schritt 5: Auto-Deploy aktivieren

```bash
# Continuous Deployment einrichten
netlify link
```

Jetzt deployed Netlify automatisch bei Git Push!

---

## 🔄 Option 3: CI/CD via GitHub Actions (Automatisch)

### Schritt 1: Netlify Tokens generieren

1. Gehe zu [app.netlify.com/user/applications](https://app.netlify.com/user/applications)
2. Klicke **"New access token"**
3. Name: `GitHub Actions`
4. Kopiere den Token (nur einmal sichtbar!)

### Schritt 2: Netlify Site ID finden

```bash
# Via CLI
netlify status

# Oder in Netlify Dashboard
# Site settings → Site details → Site ID
```

### Schritt 3: GitHub Secrets hinzufügen

1. Gehe zu GitHub Repository → **Settings** → **Secrets and variables** → **Actions**
2. Klicke **"New repository secret"**
3. Füge hinzu:
   - **Name:** `NETLIFY_AUTH_TOKEN`
   - **Value:** [Dein Netlify Token]
4. Zweites Secret:
   - **Name:** `NETLIFY_SITE_ID`
   - **Value:** [Deine Site ID]

### Schritt 4: Workflow testen

```bash
# Code ändern
echo "// Test" >> src/App.jsx

# Commit & Push
git add .
git commit -m "Test CI/CD deployment"
git push origin main
```

**Überprüfen:**
1. Gehe zu GitHub → **Actions** Tab
2. Siehe Workflow laufen (Build → Deploy → Lighthouse)
3. Nach ~3-5 Minuten ist Site live

### Schritt 5: Deploy Status Badge (optional)

Füge Badge in README hinzu:

```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/DEINE-SITE-ID/deploy-status)](https://app.netlify.com/sites/baris-haustechnik/deploys)
```

Ersetze `DEINE-SITE-ID` mit echter Site ID.

---

## 🔧 Environment Variables konfigurieren

Falls du externe APIs verwendest:

### Via Netlify Dashboard

1. **Site settings** → **Environment variables**
2. Klicke **"Add a variable"**
3. Füge hinzu (Beispiele):

| Key | Value | Scopes |
|-----|-------|--------|
| `VITE_API_URL` | `https://api.base44.com` | Production, Deploy Previews |
| `VITE_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Production |
| `NODE_VERSION` | `18` | Build |

### Via Netlify CLI

```bash
# Variable setzen
netlify env:set VITE_API_URL "https://api.base44.com"

# Variable auflisten
netlify env:list

# Variable importieren aus .env
netlify env:import .env
```

### In GitHub Actions (optional)

Falls GitHub Actions ebenfalls Environment Variables benötigt:

```yaml
# .github/workflows/deploy.yml
env:
  VITE_API_URL: ${{ secrets.VITE_API_URL }}
```

Dann Secrets in GitHub hinzufügen wie oben.

---

## 🧪 Testing nach Deployment

### Funktionalitäts-Tests

**Manuelle Checks:**
- [ ] Homepage lädt korrekt
- [ ] Alle Navigation Links funktionieren
- [ ] Formulare senden Daten (Contact Form)
- [ ] Blog Posts laden (React Query)
- [ ] Mobile Navigation (Burger Menu)
- [ ] Help Sidebar öffnet/schließt
- [ ] Emergency Button sichtbar beim Scrollen
- [ ] Footer Links funktionieren

**Browser-Tests:**
- [ ] Chrome (Desktop & Mobile)
- [ ] Firefox
- [ ] Safari (iOS)
- [ ] Edge

### Performance Tests

**Lighthouse Audit:**

```bash
# Via Chrome DevTools
# Rechtsklick → Inspect → Lighthouse Tab → Run

# Oder CLI
npx lighthouse https://baris-haustechnik.de --view
```

**Ziel-Scores:**
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

**Probleme beheben:**
- Performance: Bilder komprimieren, Code splitting
- Accessibility: ARIA labels, Kontrast prüfen
- SEO: Meta tags, Sitemap

### Security Tests

**Security Headers prüfen:**

```bash
# Via curl
curl -I https://baris-haustechnik.de

# Oder online
# https://securityheaders.com
```

**Erwartete Headers:**
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: ...
```

**SSL/TLS Test:**
```
# https://www.ssllabs.com/ssltest/
```

Erwartete Note: **A oder A+**

---

## 🐛 Troubleshooting häufiger Probleme

### Problem 1: Build schlägt fehl auf Netlify

**Symptom:**
```
Error: Build failed
npm ERR! code ELIFECYCLE
```

**Lösungen:**

1. **Node Version prüfen:**
   ```toml
   # netlify.toml
   [build.environment]
     NODE_VERSION = "18"
   ```

2. **Dependencies Cache leeren:**
   - Netlify Dashboard → **Site settings** → **Build & deploy**
   - **Clear build cache** → **Clear cache and retry deploy**

3. **Lokalen Build testen:**
   ```bash
   rm -rf node_modules dist
   npm install
   npm run build
   ```

### Problem 2: 404 bei SPA Routes

**Symptom:**
- Homepage lädt (`/`)
- Unterseiten zeigen 404 (`/leistungen`, `/blog`)

**Ursache:** SPA Redirects fehlen

**Lösung:**

Prüfe `public/_redirects`:
```
/*    /index.html   200
```

Oder `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Problem 3: Environment Variables nicht verfügbar

**Symptom:**
```javascript
console.log(import.meta.env.VITE_API_URL); // undefined
```

**Lösungen:**

1. **Präfix prüfen:** Vite erfordert `VITE_` Präfix
   ```bash
   # ✅ Richtig
   VITE_API_URL=https://api.example.com

   # ❌ Falsch
   API_URL=https://api.example.com
   ```

2. **In Netlify setzen:**
   - Site settings → Environment variables
   - Variable hinzufügen mit `VITE_` Präfix

3. **Rebuild triggern:**
   ```bash
   # Deploy ohne Code-Änderung triggern
   netlify deploy --trigger
   ```

### Problem 4: CSS Styles fehlen in Production

**Symptom:** Styles funktionieren lokal, nicht in Production

**Ursachen & Lösungen:**

1. **Tailwind content Pfade prüfen:**
   ```js
   // tailwind.config.js
   content: [
     "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}", // Alle Extensions!
   ]
   ```

2. **PostCSS Config prüfen:**
   ```js
   // postcss.config.js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

3. **Import in main.jsx:**
   ```js
   import './index.css' // Muss vorhanden sein!
   ```

### Problem 5: React Router Refresh-Problem

**Symptom:** Bei F5 auf `/blog` → 404 Error

**Lösung:** Siehe Problem 2 (SPA Redirects)

### Problem 6: Langsame Build-Zeiten

**Symptom:** Build dauert > 5 Minuten

**Optimierungen:**

1. **Dependencies Cache nutzen:**
   ```toml
   [build]
     publish = "dist"
     command = "npm ci && npm run build" # ci statt install
   ```

2. **Vite Config optimieren:**
   ```js
   // vite.config.js
   export default {
     build: {
       rollupOptions: {
         output: {
           manualChunks: {
             'react-vendor': ['react', 'react-dom'],
           }
         }
       }
     }
   }
   ```

3. **Unused Dependencies entfernen:**
   ```bash
   npm prune --production
   ```

---

## 📊 Monitoring & Analytics

### Netlify Analytics (kostenpflichtig)

1. **Site settings** → **Analytics**
2. Enable **Netlify Analytics** ($9/Monat)

Features:
- Server-side Analytics (kein Cookie-Banner nötig)
- Pageviews, Unique Visitors
- Bandwidth Usage
- Top Pages, Referrers

### Google Analytics (kostenlos)

1. **Google Analytics Account erstellen:** [analytics.google.com](https://analytics.google.com/)
2. **Property erstellen** → Tracking ID erhalten (G-XXXXXXXXXX)
3. **Environment Variable setzen:**
   ```bash
   netlify env:set VITE_GA_MEASUREMENT_ID "G-XXXXXXXXXX"
   ```
4. **Code ist bereits vorbereitet** in `src/App.jsx` (Analytics Component)

### Uptime Monitoring

**Empfohlene Tools (kostenlos):**
- [UptimeRobot](https://uptimerobot.com/) - 50 Monitors gratis
- [Pingdom](https://www.pingdom.com/) - Basis-Plan kostenlos
- [StatusCake](https://www.statuscake.com/) - 10 Tests gratis

**Setup:**
1. Account erstellen
2. Monitor hinzufügen: `https://baris-haustechnik.de`
3. Intervall: 5 Minuten
4. Alert: E-Mail bei Downtime

---

## 🔄 Updates & Maintenance

### Regelmäßige Aufgaben

**Wöchentlich:**
- [ ] Neue Blog-Posts erstellen (falls Blog aktiv)
- [ ] Kontaktformular-Submissions prüfen

**Monatlich:**
- [ ] `npm outdated` → Dependencies aktualisieren
- [ ] `npm audit` → Security Audit
- [ ] Google Analytics Reports prüfen
- [ ] Lighthouse Audit durchführen

**Quartalsweise:**
- [ ] Content-Update (Preise, Team, Referenzen)
- [ ] SEO-Optimierung (Keywords, Meta-Tags)
- [ ] Backup erstellen (Code + Database falls vorhanden)

### Dependency Updates

```bash
# Outdated Packages anzeigen
npm outdated

# Patch Updates (sicher)
npm update

# Major Updates (prüfen!)
npx npm-check-updates -u
npm install
npm run build # Testen!
```

### Rollback bei Problemen

**Via Netlify Dashboard:**
1. **Deploys** Tab öffnen
2. Letzte funktionierende Version finden
3. **"Publish deploy"** → Sofort live

**Via CLI:**
```bash
# Letzte 10 Deploys auflisten
netlify deploy:list

# Zu spezifischem Deploy zurück
netlify rollback <deploy-id>
```

---

## 📞 Support & Hilfe

### Netlify Support

- **Docs:** [docs.netlify.com](https://docs.netlify.com/)
- **Community:** [answers.netlify.com](https://answers.netlify.com/)
- **Status:** [netlifystatus.com](https://www.netlifystatus.com/)

### Entwickler-Support

- **GitHub Issues:** [github.com/umutcantezgel-cpu/Baris/issues](https://github.com/umutcantezgel-cpu/Baris/issues)
- **E-Mail:** info@baris-haustechnik.de

---

## ✅ Post-Deployment Checklist

Nach erfolgreichem Deployment:

- [ ] **DNS konfiguriert** (falls Custom Domain)
- [ ] **HTTPS aktiviert** (automatisch via Let's Encrypt)
- [ ] **Analytics tracking** funktioniert
- [ ] **Sitemap submitted** bei Google Search Console
- [ ] **Backup erstellt** (Code-Repository + Netlify Settings)
- [ ] **Team informiert** über neue Website-URL
- [ ] **Social Media Links** aktualisiert
- [ ] **Google My Business** aktualisiert (falls vorhanden)
- [ ] **E-Mail Signatur** aktualisiert

---

**🎉 Herzlichen Glückwunsch! Deine Website ist live!**

Weitere Fragen? Siehe [README.md](./README.md) oder kontaktiere Support.
