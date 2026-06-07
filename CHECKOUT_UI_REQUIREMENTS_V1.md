# AEVIMA — CHECKOUT UI REQUIREMENTS V1
**Version:** 1.0 | 2026-06-07
**Zweck:** UI-Regeln für checkout.html vor Stripe-Integration

---

## 1. POSITION DER CHECKBOXEN

**Direkt über dem Kaufbutton** — nicht darunter, nicht am Seitenrand.
Reihenfolge von oben nach unten:
1. Checkbox 1 — AGB + Datenschutz
2. Checkbox 2 — Widerruf
3. *(optional)* Checkbox 3 — Marketing-E-Mail
4. **Kaufbutton**

---

## 2. SICHTBARKEIT

- Beide Pflicht-Checkboxen immer sichtbar — kein Ausklappen, kein Scrollen nötig
- Checkboxen: 18×18 px Mindestgröße (Mobile-freundlich)
- Text: Raleway 300, 0.82rem, Farbe: `var(--muted)`
- Links ([AGB], [Datenschutz]): Rose Gold, unterstrichen, öffnen in neuem Tab

---

## 3. KAUFBUTTON-AKTIVIERUNG

| Zustand | Button |
|---|---|
| Checkbox 1 oder 2 nicht gesetzt | Deaktiviert, Opacity 0.5, `cursor: not-allowed` |
| Beide Pflicht-Checkboxen gesetzt | Aktiv, volle Opacity |

Aktivierung via JavaScript on `change`-Event der Checkboxen — clientseitig.

---

## 4. PFLICHTLINKS

| Link | Ziel | Öffnung |
|---|---|---|
| AGB | `/agb.html` | `target="_blank"` |
| Datenschutz | `/datenschutz.html` | `target="_blank"` |

---

## 5. DATEN VOR STRIPE-WEITERLEITUNG

Bevor auf Stripe weitergeleitet wird, speichert das Backend:

| Feld | Quelle |
|---|---|
| `email` | Eingabefeld im Checkout |
| `consent_timestamp` | Zeitpunkt des Klicks auf Kaufbutton |
| `checkbox_agb` | true |
| `checkbox_widerruf` | true |
| `session_id` | Stripe gibt zurück — nach Rückkehr ergänzen |

---

## 6. VERHALTEN BEI FEHLENDER ZUSTIMMUNG

- Button bleibt deaktiviert — kein Alert, keine Fehlermeldung
- Visuelle Klarheit reicht: Button grayed out
- Bei direktem API-Aufruf ohne Frontend: Backend prüft Consent-Status vor Stripe-Redirect

---

*CHECKOUT_UI_REQUIREMENTS_V1.md — Version 1.0 | 2026-06-07 — ~270 Wörter*
