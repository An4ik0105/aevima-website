# AEVIMA — LEGAL CHECKBOX AUDIT V1
**Erstellt:** 2026-06-07 | Content Freeze aktiv

---

## AKTUELLER STAND (checkout.html)

**Checkboxen vorhanden:** ❌ Keine

Aktuell enthält `checkout.html` nur einen Textverweis:
> *"Mit dem Klick akzeptierst du AGB und Datenschutz."*

Das ist **keine rechtswirksame Zustimmung** — kein Checkbox, keine aktive Bestätigung, kein Widerrufshinweis.

---

## BEWERTUNG

| Pflicht | Vorhanden | Status |
|---|---|---|
| AGB-Zustimmung via Checkbox | ❌ Nur Texthinweis | **Fehlt** |
| Datenschutz-Zustimmung via Checkbox | ❌ | **Fehlt** |
| Widerrufsausschluss via Checkbox | ❌ | **Fehlt** |

---

## EMPFOHLENE FINALE LAUNCH-VERSION

**2 Pflicht-Checkboxen** (nicht vorausgewählt, Kauf gesperrt bis gesetzt):

**Checkbox 1 — AGB + Datenschutz:**
> "Ich habe die [AGB] und die [Datenschutzerklärung] gelesen und stimme ihnen zu."

**Checkbox 2 — Widerruf:**
> "Ich stimme ausdrücklich zu, dass mit der Ausführung sofort begonnen wird, und bestätige, dass ich damit mein Widerrufsrecht verliere."

**Optional — Checkbox 3 (Marketing):**
> "Ich möchte AEVIMA-Updates per E-Mail erhalten." (nicht Pflicht)

---

## HANDLUNGSBEDARF VOR LAUNCH

`checkout.html` muss um die 2 Pflicht-Checkboxen ergänzt werden.
Kaufbutton muss per JavaScript deaktiviert bleiben bis beide gesetzt.
Zustimmungs-Zeitstempel muss vor Stripe-Weiterleitung gespeichert werden.

---

*LEGAL_CHECKBOX_AUDIT_V1.md — 2026-06-07 — ~220 Wörter*
