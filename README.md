# TechTrutz Website (Astro + Tailwind)

Moderne, schnelle und SEO-optimierte Website für einen deutschen IT-Dienstleister.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Platzhalter ersetzen (rechtlich wichtig)

Alle zentralen Firmendaten stehen in `src/data/site.ts`.

Bitte dort ersetzen:
- `name`
- `url`
- `phone`
- `email`
- `address.street`
- `address.zip`
- `address.city`
- `ustId`

Zusätzlich in `src/pages/impressum.astro` ersetzen:
- `[Vorname Nachname]` bei „Verantwortlich für den Inhalt“

Rechtshinweis:
- `Impressum`, `Datenschutz` und `Barrierefreiheit` sind Basistemplates.
- Vor Livegang rechtlich final prüfen lassen (z. B. durch Rechtsberatung).

## Seiten

- `/` Startseite (Hero, Leistungen, Vorteile, Ablauf, CTA mit Sticky-Stacking)
- `/leistungen`
- `/ueber-uns`
- `/kontakt`
- `/impressum`
- `/datenschutz`
- `/barrierefreiheit`

## Deployment auf Vercel

1. Repository zu GitHub pushen.
2. In Vercel: „New Project" > Repository auswählen.
3. Framework Preset: `Astro` (wird meist automatisch erkannt).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy ausführen.

Optional Domain:
1. In Vercel-Projekt „Settings > Domains" öffnen.
2. Eigene Domain eintragen (z. B. `techtrutz.de`).
3. DNS-Einträge laut Vercel-Anleitung setzen.

## Performance/SEO Hinweise

- Statische Ausgabe (`output: 'static'`)
- Minimales JavaScript (nur mobiles Menü + Cookie-Hinweis)
- Semantic HTML, Fokuszustände, skip-link, hohe Kontraste
- Canonical, OG, Twitter Meta, JSON-LD (LocalBusiness)
- `robots.txt` und `sitemap.xml` im `public/` Verzeichnis
