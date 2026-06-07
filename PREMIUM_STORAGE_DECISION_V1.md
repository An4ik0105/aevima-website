# AEVIMA — PREMIUM STORAGE DECISION V1
**Version:** 1.0 | 2026-06-07
**Zweck:** Speicherstrategie für Launch festlegen

---

## VARIANTENVERGLEICH

| | A — JSON-Datei | B — SQLite | C — PostgreSQL |
|---|---|---|---|
| Setup-Zeit | ~10 Min | ~20 Min | ~60 Min |
| Kosten | 0 € | 0 € | 0–25 €/Monat |
| Wartung | Keine | Minimal | Hoch |
| Abfragen | Keine | Einfach | Vollständig |
| Skalierbarkeit | ~50 Käufe | ~10.000 Käufe | Unbegrenzt |
| Datenverlust-Risiko | Hoch (kein Backup) | Mittel | Niedrig |
| Empfehlung | ❌ | ✅ Launch | ✅ Später |

---

## 1. ERSTE 100 VERKÄUFE

**Empfehlung: SQLite**

- Eine einzige Datei (`aevima.db`) auf dem Server
- Kein externer Dienst, kein Account, keine Kosten
- Für <100 Käufe: performant genug
- Backup: täglicher automatischer Datei-Kopie per Cron
- Struktur: 2 Tabellen — `purchases` + `analyses`

JSON-Datei wird abgelehnt: kein simultaner Schreibzugriff möglich, Datenverlust-Risiko bei Serverabsturz.

---

## 2. ERSTE 1.000 VERKÄUFE

**SQLite bleibt ausreichend bis ~5.000 Käufe**

SQLite ist für Read-Heavy-Workloads optimiert. Wenn >10 Käufe/Stunde erwartet werden oder mehrere Backend-Instanzen nötig sind → wechseln.

Empfehlung: Supabase (Postgres, kostenloser Tier bis 500 MB) als einfache Migration wenn nötig.

---

## 3. WANN EIN WECHSEL NÖTIG WIRD

| Trigger | Maßnahme |
|---|---|
| >50 gleichzeitige Webhooks/Stunde | SQLite → Supabase |
| Backend auf mehrere Server verteilt | SQLite → Supabase |
| >5 GB Analysedaten | Supabase → Managed Postgres |
| Für aevima.com mit 39 €/Kauf: frühestens bei ~1.000 Käufen/Monat | |

---

## 4. EMPFEHLUNG FÜR AEVIMA LAUNCH

**SQLite — sofort, kostenlos, wartungsarm.**

Minimale Struktur:

```
purchases
  id | stripe_id | email | vorname | lz | hwz | az | status | created_at

analyses
  id | purchase_id | content | pdf_path | sent_at
```

Backup-Strategie: täglicher Cron kopiert `aevima.db` in separaten Ordner.
Bei Servercrash: Stripe-Dashboard als Backup-Quelle für Käufe.

**Keine PostgreSQL zum Launch** — zu viel Setup, zu früh, zu teuer für Phase 1.

---

*PREMIUM_STORAGE_DECISION_V1.md — Version 1.0 | 2026-06-07 — ~330 Wörter*
