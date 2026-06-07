# AEVIMA SEELENPROFIL V1 — VERBINDLICHE PRODUKTARCHITEKTUR
**Version:** 1.0 | 2026-06-07
**Status:** Verbindlich — Grundlage für alle weiteren Entscheidungen

---

## KERNPHILOSOPHIE

```
Kostenlos = Erkenntnis
Premium   = Verständnis
```

---

## KOSTENLOSE VERSION

### Ziel

Der Nutzer soll denken: **"Verdammt. Das stimmt."**
Nicht: "Ich habe schon alles bekommen."

### Inhalte

| Abschnitt | Felder |
|---|---|
| Lebenszahl | Kernthema · Stärke · Herausforderung · AEVIMA-Moment |
| Herzwunschzahl | Kernthema · Stärke · Herausforderung · AEVIMA-Moment |
| Ausdruckszahl | Kernthema · Stärke · Herausforderung · AEVIMA-Moment |

### AEVIMA-Moment (Pflichtformat)

Kein Verkaufsappell. Kein "Das bleibt im kostenlosen Profil offen."  
Stattdessen: Ein konkreter, psychologisch präziser Moment — echte Erkenntnis, die Neugier weckt.

**Referenz:**
> "Du hast viel Zeit damit verbracht, gesehen zu werden.  
> Die eigentliche Frage beginnt oft erst danach:  
> Fühlst du dich dabei auch wirklich verstanden?"

Format: 2–3 Sätze. Persönlich. Präzise. Nicht werbend. Kein "klick hier."

### Abschluss der kostenlosen Analyse (statisch)

```
"Die Zahlen zeigen einzelne Facetten.
Die eigentliche Frage beginnt dort, wo sie zusammenwirken.

Die vollständige Analyse betrachtet zusätzlich:

  ✦ Geldmuster
  ✦ Beziehungsmuster
  ✦ Wiederkehrende Lebensthemen
  ✦ Innere Spannungsfelder
  ✦ Persönliche Synthese
  ✦ Persönlicher Lebenskompass"
```

### Tokenkosten: 0 €

- Nur JavaScript + statische Textbibliothek
- Keine API. Keine KI. Keine Serveranfrage.

---

## VOLLVERSION (PREMIUM)

### Ziel

Der Nutzer soll denken: **"Jetzt verstehe ich, warum."**

### Abschnitte

| # | Titel | Frage |
|---|---|---|
| 1 | Der rote Faden | Welche Themen ziehen sich durch dein Leben? |
| 2 | Beziehungsmuster | Warum wiederholen sich bestimmte Dynamiken? |
| 3 | Geldmuster | Welche Überzeugungen prägen Entscheidungen, Sicherheit und Wachstum? |
| 4 | Innere Spannungsfelder | Welche Teile in dir ziehen in unterschiedliche Richtungen? |
| 5 | Persönliche Synthese | Verbindung aller Zahlen und Muster |
| 6 | Persönlicher Lebenskompass | Abschlusskapitel mit konkreten Entwicklungsimpulsen |

### Synthese (Abschnitt 5) verbindet

- Lebenszahl
- Herzwunschzahl
- Ausdruckszahl
- Beziehungsmuster
- Geldmuster

### Tokenregel

**KI erst nach bestätigter Zahlung.**

```
Stripe → Webhook → Backend → KI-Aufruf → Profil generieren
```

Keine KI vor Zahlung. Kein API-Key im Frontend.

---

## STRUKTURVERGLEICH FREE vs. PREMIUM

| Bereich | Kostenlos | Premium |
|---|---|---|
| Lebenszahl | ✅ Kernthema + Stärke + Herausforderung + Moment | ➕ Tiefere Synthese |
| Herzwunschzahl | ✅ Kernthema + Stärke + Herausforderung + Moment | ➕ Tiefere Synthese |
| Ausdruckszahl | ✅ Kernthema + Stärke + Herausforderung + Moment | ➕ Tiefere Synthese |
| Geldmuster | ❌ Nur erwähnt im Abschluss | ✅ Vollständig |
| Beziehungsmuster | ❌ Nur erwähnt im Abschluss | ✅ Vollständig |
| Innere Spannungsfelder | ❌ | ✅ Vollständig |
| Persönliche Synthese | ❌ | ✅ Vollständig |
| Persönlicher Lebenskompass | ❌ | ✅ Vollständig |

---

## JSON-STRUKTUR (Textumsetzung)

```
public/data/
├── preview_lebenszahl.json       ← 12 Einträge × 4 Felder = 48 Texte
├── preview_herzwunsch.json       ← 12 Einträge × 4 Felder = 48 Texte
├── preview_ausdruckszahl.json    ← 12 Einträge × 4 Felder = 48 Texte
└── preview_template.json         ← Einleitung + Abschluss (statisch)
```

**Gesamt: 144 + 2 = 146 Texte** (alle statisch, kein API-Call)

JSON-Schema pro Datei:
```json
{
  "1": {
    "kernthema": "...",
    "staerke": "...",
    "herausforderung": "...",
    "aevima_moment": "..."
  },
  "2": { ... },
  ...
  "11": { ... },
  "22": { ... },
  "33": { ... }
}
```

---

## TONREGELN

| Verboten | Erlaubt |
|---|---|
| Esoterik-Floskeln | Psychologisch präzise Beobachtungen |
| Horoskop-Sprache | Ruhiger, klarer AEVIMA-Stil |
| Druck-Paywall | Natürliche Neugier durch Qualität |
| Generische Sätze | Konkrete, wiedererkennbare Momente |
| "Das bleibt offen..." | AEVIMA-Moment stattdessen |

---

*AEVIMA_SEELENPROFIL_V1.md — Version 1.0 | 2026-06-07*
*Verbindlich. Ersetzt alle vorherigen Produktstruktur-Dokumente.*
