# CHECKOUT UI UPDATE REPORT
**Datum:** 2026-06-07 | Kein Push

## Geänderte Datei
`checkout.html`

## Prüfpunkte

| Prüfpunkt | Status |
|---|---|
| Checkbox 1 — AGB + Datenschutz | ✅ Vorhanden |
| Checkbox 2 — Widerruf | ✅ Vorhanden |
| Links AGB + Datenschutz (neuer Tab) | ✅ `target="_blank"` |
| Button standardmäßig deaktiviert | ✅ `disabled` |
| Button-Aktivierung via JavaScript | ✅ `checkConsent()` |
| Button-Text | ✅ "Jetzt kaufen — 39 €" |
| Preis 39 € | ✅ |
| Deaktiviert-Styling (opacity 0.5, not-allowed) | ✅ |

## Noch nicht implementiert (nächster Schritt)
- Stripe-Integration
- Backend-Speicherung der Zustimmungen
- Webhook

*Kein Push — lokal testbar unter http://localhost:3000/checkout*
