# AEVIMA — LEGAL CONSENT RULE V1
**Version:** 1.0 | 2026-06-07
**Status:** VERBINDLICH
**Geltungsbereich:** checkout.html + Backend

---

## PFLICHTZUSTIMMUNGEN VOR KAUF (3 Checkboxen)

| # | Checkbox-Text | Pflicht | Vorausgewählt |
|---|---|---|---|
| 1 | "Ich stimme den AGB und der Datenschutzerklärung zu." | ✅ | ❌ |
| 2 | "Ich stimme ausdrücklich zu, dass mit der Ausführung sofort begonnen wird, und bestätige, dass ich damit mein Widerrufsrecht verliere." | ✅ | ❌ |
| 3 | "Ich möchte AEVIMA-Updates per E-Mail erhalten." (optional) | ❌ | ❌ |

---

## KAUFBUTTON-REGEL

Kaufbutton ist **deaktiviert**, solange Checkbox 1 oder Checkbox 2 nicht gesetzt.
Aktivierung erfolgt clientseitig via JavaScript bei Checkbox-Klick.
Buttontext: **"Jetzt kaufen — 39 €"**

---

## REIHENFOLGE

```
Checkboxen setzen → Button aktiv → Klick → Zustimmung gespeichert → Redirect zu Stripe
```

Zustimmung wird **vor** Stripe-Weiterleitung gespeichert.

---

## GESPEICHERTE NACHWEISE (SQLite)

| Feld | Typ |
|---|---|
| `consent_timestamp` | ISO-Zeitstempel |
| `email` | Text |
| `stripe_session_id` | Text (nach Rückkehr von Stripe) |
| `checkbox_agb` | Boolean |
| `checkbox_widerruf` | Boolean |
| `agb_version` | Text (z.B. "2026-06-07") |

---

*LEGAL_CONSENT_RULE_V1.md — Version 1.0 | 2026-06-07 — 200 Wörter — VERBINDLICH*
