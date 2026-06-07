# AEVIMA — BUSINESS REPORTING V1
**Version:** 1.0 | 2026-06-07
**Zweck:** Datenarchitektur für wöchentliche Geschäftsübersicht
**Keine Implementierung — nur Architektur**

---

## DATENQUELLEN

| System | Liefert |
|---|---|
| **Stripe** | Käufe · Umsatz brutto · Stripe-Gebühren · Rückerstattungen |
| **Anthropic API** | Anzahl KI-Aufrufe · Token-Verbrauch · Kosten |
| **Hosting** (Server/Netlify/etc.) | Hosting-Kosten (fix, monatlich) |
| **E-Mail-System** | Versendete E-Mails · ggf. Kosten |
| **Analytics** (Plausible/GA4) | Besucher · Seitenaufrufe · Absprungrate |
| **Backend-Logs** | Anzahl kostenloser Analysen · Anzahl Zahlungsversuche |

---

## WELCHE DATEN GESPEICHERT WERDEN MÜSSEN

### Pro Kauf (Stripe Webhook)
- Zahlungsdatum · Uhrzeit
- Betrag brutto (39 €)
- Stripe-Gebühr (~1,4 % + 0,25 €)
- Betrag netto
- Lebenszahl · HWZ · AZ des Käufers (anonym)
- KI-Kosten dieser Anfrage (Token × Preis)

### Pro Woche (Aggregiert)
- Käufe gesamt
- Umsatz brutto / netto
- KI-Kosten gesamt
- Hosting-Kosten (anteilig)
- Gewinn vor Steuern

### Analytics (Backend)
- Anzahl `/seelenprofil`-Aufrufe (= Besucher)
- Anzahl abgeschlossener kostenloser Analysen (= Formular-Submit)
- Anzahl Käufe

---

## WÖCHENTLICHER REPORT (jeden Montag)

### Berechnung

```
Umsatz netto = Käufe × 39 € − Stripe-Gebühren
KI-Kosten    = Käufe × ∅-Tokenkost (~0,05 €)
Hosting      = Monatlich / 4
Gewinn       = Umsatz netto − KI-Kosten − Hosting − Sonstiges
```

### Conversion-Funnel

```
Besucher → Analyse gestartet → Paywall gesehen → Kauf
CR1 = Analyse / Besucher
CR2 = Kauf / Paywall gesehen
Gesamt-CR = Kauf / Besucher
```

### Top-5-Kennzahlen (Kurzübersicht)

| Kennzahl | Quelle |
|---|---|
| Umsatz letzte Woche | Stripe |
| Umsatz gesamt (seit Launch) | Stripe |
| Käufe gesamt | Stripe |
| ∅ Umsatz / Besucher | Stripe ÷ Analytics |
| Gewinn letzte Woche | Berechnung |

---

## WIE DER BERICHT ERZEUGT WIRD

**Option A — Manuell (Launch):**
Stripe Dashboard → CSV-Export → Werte in Tabelle eintragen.
Dauer: ~10 Minuten/Woche.

**Option B — Automatisiert (später):**
Wöchentlicher Cron-Job fragt Stripe API ab → berechnet Report → sendet Zusammenfassung per E-Mail oder Telegram.

Für Launch genügt Option A.

---

## DOMAIN-WEITERLEITUNGEN

| Domain | Ziel | Typ |
|---|---|---|
| `aevima.com` | Hauptseite | — |
| `aevima.de` | → `aevima.com` | 301 Redirect |
| `aevima.eu` | → `aevima.com` | 301 Redirect |

Konfiguration bei Strato: DNS → Weiterleitung → 301 permanent auf `https://aevima.com`.

---

*BUSINESS_REPORTING_V1.md — Version 1.0 | 2026-06-07 — ~430 Wörter*
*Kein Code. Kein Backend. Nur Architektur.*
