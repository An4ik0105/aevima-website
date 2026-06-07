# AEVIMA — TOKEN-SPAR-ARCHITEKTUR
**Version:** 1.0 | 2026-06-07
**Grundprinzip:** Kein KI-Call kostet Geld, bevor der Nutzer bezahlt hat.

---

## ZIEL

Die kostenlose Vorschau (Preview) des Seelenprofils verursacht **0 Tokenkosten**.
KI-APIs werden ausschließlich nach erfolgreicher, serverseitig geprüfter Zahlung aufgerufen.

---

## ARCHITEKTUR — ZWEI SCHICHTEN

### Schicht 1: Kostenlose Vorschau (Pre-Payment)

| Eigenschaft | Wert |
|---|---|
| KI-API-Calls | ❌ Keine |
| Anthropic | ❌ Nicht involviert |
| OpenAI / GPT | ❌ Nicht involviert |
| Kosten | 0 € |
| Berechnung | Lokal im Browser (JavaScript) |
| Texte | Statische Dateien |

**Technische Umsetzung:**
- Berechnungen (Lebenszahl, Ausdruckszahl etc.) laufen vollständig per **JavaScript im Browser**
- Texte kommen aus **`previewTexts.json`** oder **`previewData.js`** — statisch, vorbereitet, keine API
- Keine Server-Anfrage an KI-Dienste
- API-Keys existieren im Frontend **nicht**

### Schicht 2: Premium-Profil (Post-Payment)

| Eigenschaft | Wert |
|---|---|
| KI-API-Calls | ✅ Erlaubt |
| Auslöser | Stripe Webhook (`payment_intent.succeeded`) |
| Serverseitige Prüfung | Pflicht (`payment_status === "paid"`) |
| API-Key | Nur serverseitig (Backend) |
| Frontend | Empfängt fertiges Ergebnis — kein Key, kein direkter API-Zugriff |

**Technische Umsetzung:**
- Stripe Webhook bestätigt Zahlung serverseitig
- Backend-Route `/backend/generate-profile` wird **nur** nach `payment_status === "paid"` aktiviert
- KI (Anthropic / OpenAI) generiert dann die vollständige Synthese
- Feste Bausteine kommen aus **`premiumTexts.json`** (spart weitere Token)
- Ergebnis wird zurück an Frontend gesendet — kein direkter API-Zugriff im Browser

---

## DATEISTRUKTUR (geplant)

```
aevima-website/
├── public/
│   ├── data/
│   │   ├── previewTexts.json       ← Kostenlose Vorschau-Texte (statisch)
│   │   └── premiumTexts.json       ← Feste Vollversion-Bausteine (statisch)
│   └── js/
│       └── previewData.js          ← Lokale Berechnungslogik (kein API-Call)
├── backend/
│   ├── generate-profile.js         ← KI-Call NUR nach payment_status = paid
│   ├── stripe-webhook.js           ← Webhook-Empfang & Validierung
│   └── .env                        ← ANTHROPIC_API_KEY, STRIPE_SECRET (niemals öffentlich)
```

---

## SICHERHEITSREGELN

| Regel | Details |
|---|---|
| API-Key im Frontend | ❌ Absolut verboten |
| API-Key in Git | ❌ Absolut verboten (`.env` in `.gitignore`) |
| KI-Call ohne Zahlung | ❌ Absolut verboten |
| Serverseitige Zahlungsprüfung | ✅ Pflicht — nie clientseitig |
| Stripe Webhook-Signatur-Validierung | ✅ Pflicht |

---

## KOSTEN-ÜBERSICHT

| Nutzungsphase | KI-Kosten |
|---|---|
| Besucher schaut Landing Page | 0 € |
| Nutzer gibt Name + Geburtsdatum ein | 0 € |
| Nutzer sieht Vorschau | 0 € |
| Nutzer schließt Browser ohne Kauf | 0 € |
| **Nutzer kauft (59 €)** | **~0,02–0,10 € KI-Kosten (einmalig)** |

**Marge:** ~99% bei jedem Kauf. KI-Kosten vernachlässigbar.

---

## WICHTIG FÜR ENTWICKLUNG

- Jede neue Feature-Idee zuerst prüfen: **"Kostet das vor oder nach der Zahlung?"**
- Vor Zahlung: nur JavaScript + statische Daten
- Nach Zahlung: alles erlaubt — KI, personalisierte Synthese, etc.
- Diese Architektur ist **nicht verhandelbar** — sie schützt die Wirtschaftlichkeit des Projekts

---

*TOKEN_ARCHITECTURE.md — Version 1.0 | 2026-06-07*
*Verbindlich für alle technischen Entscheidungen bei AEVIMA.*
