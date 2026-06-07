# AEVIMA — CHECKOUT BACKEND PLAN V1
**Version:** 1.0 | 2026-06-07
**Ziel:** Ersten echten Kauf ermöglichen
**Keine Implementierung — nur Architektur**

---

## 1. MINIMAL-LAUNCH-ARCHITEKTUR

```
Nutzer gibt Daten ein (Vorname, Nachname, Geburtsdatum)
        ↓
Berechnungen lokal (LZ, HWZ, AZ)
        ↓
Zahlen + Name + E-Mail → an Stripe Checkout übergeben
        ↓
Stripe Checkout (hosted) → Nutzer bezahlt 39 €
        ↓
Stripe sendet Webhook → payment_intent.succeeded
        ↓
Backend empfängt Webhook → validiert Signatur
        ↓
Backend ruft Anthropic API auf (Synthese-Prompt)
        ↓
KI generiert Vollanalyse (~650 Wörter)
        ↓
[Optional Phase 2] PDF generieren
        ↓
E-Mail mit Vollanalyse → an Käufer
        ↓
Redirect auf Bestätigungsseite
```

---

## 2. GESPEICHERTE DATEN (Minimum)

| Datenpunkt | Pflicht | Zweck |
|---|---|---|
| E-Mail-Adresse | ✅ | E-Mail-Zustellung |
| Kaufdatum + Zeit | ✅ | Reporting |
| Stripe Payment ID | ✅ | Idempotenz / Recovery |
| Zahlungsstatus | ✅ | Fehlerhandling |
| LZ · HWZ · AZ | ✅ | Prompt-Eingabe + Re-Generierung |
| Vorname | ✅ | Personalisierung |
| Generierte Analyse | ✅ | Re-Zustellung bei E-Mail-Fehler |

---

## 3. NICHT GESPEICHERT

| Datenpunkt | Grund |
|---|---|
| Nachname | Nicht nötig für Profil oder E-Mail |
| Geburtsdatum (roh) | LZ/HWZ/AZ reichen — weniger DSGVO-Risiko |
| Zahlungsdetails (Karte) | Stripe hält diese — Backend nie |
| IP-Adresse | Nicht erforderlich |

---

## 4. FEHLERFÄLLE + RECOVERY

### Zahlung erfolgreich, KI fehlgeschlagen
- Webhook speichert Kauf als `status: paid, analysis: pending`
- Retry-Job versucht KI-Aufruf bis zu 3× (mit Abstand)
- Nach 3 Fehlern: manuelle Benachrichtigung (Telegram/E-Mail an Anna)

### PDF fehlgeschlagen (Phase 2)
- E-Mail ohne PDF versenden
- PDF als separater Retry-Job

### E-Mail fehlgeschlagen
- Analyse liegt in DB → manuelle Re-Zustellung möglich
- Retry bis zu 3× automatisch

### Stripe Webhook doppelt empfangen
- Idempotenz via `stripe_payment_id` — zweiter Eingang wird ignoriert

---

## 5. TECHNISCHER STACK (Minimum)

| Komponente | Option |
|---|---|
| Backend | Node.js + Express (einfachste Option) |
| Hosting | Railway / Render / Fly.io (kostenlos für kleinen Traffic) |
| Datenbank | Supabase (Postgres, kostenlos) oder SQLite (Datei) |
| E-Mail | Resend.com (100 E-Mails/Tag kostenlos) |
| PDF (Phase 2) | Puppeteer oder html-pdf-node |

---

## TOP 5 TECHNISCHE AUFGABEN BIS ERSTEM LIVE-VERKAUF

| # | Aufgabe | Abhängigkeit |
|---|---|---|
| 1 | Backend aufsetzen (Node + Express, Stripe-Webhook-Endpunkt) | Keine |
| 2 | Stripe-Produkt anlegen (39 €, einmalig) + Checkout-Link | Stripe-Account |
| 3 | Webhook → Anthropic-API-Aufruf (Prompt aus PROMPT_SYNTHESIS_V1) | Backend |
| 4 | E-Mail-Versand nach Kauf (Resend + Analyse als Text) | Backend + E-Mail-Account |
| 5 | checkout.html mit echtem Stripe-Checkout-Link verbinden | Stripe-Produkt |

**Launch möglich ohne:** PDF · Analytics · Retry-System · Datenbank (kann temporär als JSON-Log starten)

---

*CHECKOUT_BACKEND_PLAN_V1.md — Version 1.0 | 2026-06-07 — ~550 Wörter*
*Kein Code. Nur Architektur.*
