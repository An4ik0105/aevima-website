# UX & PREIS UPDATE REPORT
**Datum:** 2026-06-07
**Status:** Umgesetzt — kein Push

---

## 1. DATUMSFELD — ÄNDERUNG

### Was geändert wurde
**Datei:** `seelenprofil.html`

| Vorher | Nachher |
|---|---|
| `<input type="date">` (Browser-Datepicker) | `<input type="text" placeholder="TT.MM.JJJJ">` |
| Native Browser-UI (mobil: Scroll-Picker) | Direkte Tastatureingabe, nummerisch |

### Zusätzlich implementiert
- Beispieltext unter dem Feld: *"Beispiel: 01.05.1989"*
- `inputmode="numeric"` → öffnet Zahlentastatur auf Mobile
- `maxlength="10"` → verhindert Überlänge
- Validierung beim Submit: zeigt Fehlermeldung bei falschem Format
- `parseDate()` Funktion: akzeptiert sowohl `TT.MM.JJJJ` als auch `JJJJ-MM-TT` (Rückwärtskompatibilität)

### Nicht geändert
- `astrocartography.html` — eigener Flow, nicht Teil des Seelenprofil-MVP
- `seelenprofil-v2.html` — archiviert
- `synastrie.html` / `kalender.html` — andere Produkte

---

## 2. PREIS — ÄNDERUNG

### Neuer Standardpreis: **39 €**

| Datei | Alter Preis | Neuer Preis | Status |
|---|---|---|---|
| `seelenprofil.html` | 59 € | **39 €** | ✅ Geändert |
| `checkout.html` | 49 € | **39 €** | ✅ Geändert |

### Nicht geändert (bewusst)
| Datei | Grund |
|---|---|
| `CHECKOUT_SYSTEM.md` | Architekturdokument — Archiv, kein Live-Dokument |
| `LANDINGPAGE_ARCHITECTURE.md` | Architekturdokument — Archiv |
| `UI_MOCKUP_SYSTEM.md` | Mockup-Referenz — Archiv |
| `TOKEN_ARCHITECTURE.md` | Technische Referenz — Preis nur als Beispiel |
| `seelenprofil-v2.html` | Archiviert — kein Live-Flow |
| `index.html` | Kein Preis vorhanden |

---

## 3. VALIDIERUNG

| Prüfung | Ergebnis |
|---|---|
| `01.05.1989` → LZ 33 | ✅ |
| `15.03.1990` → LZ 1 | ✅ |
| Falsche Eingabe → null + Fehlermeldung | ✅ |
| Preis in seelenprofil.html | **39 €** ✅ |
| Preis in checkout.html | **39 €** ✅ |
| Server HTTP 200 | ✅ |

---

## 4. NOCH NICHT UMGESETZT

| Bereich | Notiz |
|---|---|
| E-Mail-Templates | Kein E-Mail-System vorhanden |
| PDF-Templates | Kein PDF-System vorhanden |
| Stripe-Konfiguration | Stripe nicht integriert |
| index.html Preisnennung | Kein Preis vorhanden — ggf. ergänzen |

---

*UX_PRICE_UPDATE_REPORT.md — 2026-06-07 — Kein Push*
