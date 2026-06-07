# AEVIMA — PROJEKTSTATUS V1
**Erstellt:** 2026-06-07
**Zweck:** Inventur aller vorhandenen und fehlenden Bausteine

---

## 1. KOSTENLOSE VERSION — STATUS: ✅ VOLLSTÄNDIG

| Modul | Inhalt | JSON | Integration |
|---|---|---|---|
| Lebenszahl | ✅ LEBENSZAHL_DRAFT_V1.md (12 Zahlen) | ✅ preview_lebenszahl.json | ✅ seelenprofil.html |
| Herzwunschzahl | ✅ HERZWUNSCH_DRAFT_V1.md (12 Zahlen) | ✅ preview_herzwunsch.json | ✅ seelenprofil.html |
| Ausdruckszahl | ✅ AUSDRUCKSZAHL_DRAFT_V1.md (12 Zahlen) | ✅ preview_ausdruckszahl.json | ✅ seelenprofil.html |

**Berechnungen (lokal, kein API):**
- `calcLebenszahl()` — Geburtsdatum → Lebenszahl ✅
- `calcHerzwunsch()` — Vokale aus Name → HWZ ✅
- `calcAusdruckszahl()` — Alle Buchstaben aus Name → AZ ✅

**Flow:** Eingabe → 3 Berechnungen → 3 JSONs parallel → Render LZ → HWZ → AZ → Paywall
**Tokenkosten Kostenlose Version: 0 €** ✅

---

## 2. VORHANDENE DATEIEN — VOLLSTÄNDIGE LISTE

### Inhaltsdateien (Markdown)

| Datei | Zweck | Status |
|---|---|---|
| LEBENSZAHL_DRAFT_V1.md | 12 LZ-Texte (kostenlos) | ✅ Freigegeben |
| HERZWUNSCH_DRAFT_V1.md | 12 HWZ-Texte (kostenlos) | ✅ Freigegeben |
| AUSDRUCKSZAHL_DRAFT_V1.md | 12 AZ-Texte (kostenlos) | ✅ Freigegeben |
| CONTENT_GELD_LZ.md | Geldmuster für LZ 1–9, 11, 22, 33 | ✅ Vorhanden (Premium) |
| CONTENT_AUSDRUCKSZAHL_GESAMT.md | AZ 1–33 (Premium-Tiefe) | ✅ Vorhanden |
| CONTENT_HERZWUNSCH_KOMBINATIONEN.md | LZ × HWZ Kombinationen (Teilmenge) | ⚠️ Unvollständig (~15 von 144) |
| CONTENT_HERZWUNSCH_LZ.md | Herzwunsch nach Lebenszahl (Premium) | ✅ Vorhanden |

### Architekturdateien

| Datei | Zweck | Status |
|---|---|---|
| AEVIMA_SEELENPROFIL_V1.md | Verbindliche Produktarchitektur | ✅ Referenz |
| CONTENT_RULE_V1.md | Tonregeln und Inhaltsregeln | ✅ Verbindlich |
| PREMIUM_RULE_V1.md | KI-Regeln für Vollversion | ✅ Verbindlich |
| TOKEN_ARCHITECTURE.md | Free vs. Premium Tokenlogik | ✅ Verbindlich |
| AUSDRUCKSZAHL_ARCHITEKTUR.md | AZ Produktlogik | ✅ Referenz |
| CHECKOUT_SYSTEM.md | Vollständige Checkout-Spezifikation | ✅ Verbindlich |
| DESIGN_SYSTEM_V1.md | Farben, Fonts, UI-Regeln | ✅ Verbindlich |
| BRAND_GUIDELINES.md | Markenregeln | ✅ Verbindlich |
| AEVIMA_MASTER_FRAMEWORK.md | Gesamtframework | ✅ Referenz |

### JSON-Dateien

| Datei | Einträge | Status |
|---|---|---|
| public/data/preview_lebenszahl.json | 12 (1–9, 11, 22, 33) | ✅ Validiert |
| public/data/preview_herzwunsch.json | 12 (1–9, 11, 22, 33) | ✅ Validiert |
| public/data/preview_ausdruckszahl.json | 12 (1–9, 11, 22, 33) | ✅ Validiert |

### HTML-Dateien

| Datei | Zweck | Status |
|---|---|---|
| seelenprofil.html | Kostenloser Flow (MVP) | ✅ Funktionsfähig |
| index.html | Hauptseite (alle 4 Säulen) | ✅ Online |
| checkout.html | Kaufseite | ⚠️ Ohne Stripe |
| confirmation.html | Kaufbestätigung | ⚠️ Platzhalter |
| kontakt.html | Kontaktformular | ✅ Vorhanden |
| agb.html / datenschutz.html / impressum.html | Rechtliches | ✅ Vorhanden |
| seelenprofil-v2.html | Alte Vollversion (Testtool) | ⚠️ Archiv |

---

## 3. FRÜHERE VOLLVERSION — WAS TESTER GESEHEN HABEN

`seelenprofil-v2.html` enthält eine vollständige, funktionsfähige Premium-Darstellung mit hartkodiertem Inhalt. Folgendes war für Tester sichtbar:

| Bereich | Inhalt | Herkunft |
|---|---|---|
| Lebenszahl-Profil | Teaser-Texte für alle LZ | Hardkodiert in JS |
| Herzwunsch (Seelenzahl) | Generische Hinweise | Hardkodiert |
| Ausdruckszahl | Wirkungsbeschreibungen | CONTENT_AUSDRUCKSZAHL_GESAMT.md |
| Beziehungsmuster | Texte für LZ 1, 4, 6, 9, 22, 33 | Hardkodiert in JS |
| Geldmuster | Texte für LZ 3, 5, 6, 7, 11, 22, 33 | CONTENT_GELD_LZ.md |
| 13-Jahres-Zyklen | Lebensabschnitt-Berechnung | Hardkodiert |
| Lebenszahl-Kontrast | Innen-/Außen-Wirkung | Hardkodiert |

**Wiederverwendbar für Premium:** CONTENT_GELD_LZ.md (alle 12 LZ vorhanden, hohe Qualität)

---

## 4. FEHLENDE PREMIUM-BAUSTEINE

### Inhalt

| Baustein | Status | Priorität |
|---|---|---|
| Geldmuster | ✅ CONTENT_GELD_LZ.md vorhanden | Nur JSON-Konvertierung nötig |
| Beziehungsmuster | ⚠️ Teiltexte in seelenprofil-v2.html | Herausschreiben + vervollständigen |
| Innere Spannungsfelder | ❌ Keine Datei | Neu erstellen |
| Persönliche Synthese (LZ × HWZ × AZ) | ❌ Keine Datei | KI-generiert (nach Zahlung) |
| Persönlicher Lebenskompass | ❌ Keine Datei | KI-generiert (nach Zahlung) |
| HWZ-Kombinationen | ⚠️ ~15 von 144 vorhanden | Vervollständigen ODER KI-generiert |

### Technik

| Baustein | Status |
|---|---|
| Stripe-Integration (checkout.html) | ❌ Nicht vorhanden |
| Backend (Node/Express oder Serverless) | ❌ Nicht vorhanden |
| Stripe Webhook → payment_status | ❌ Nicht vorhanden |
| KI-Aufruf nach Zahlung (Anthropic API) | ❌ Nicht vorhanden |
| E-Mail-Bestätigung nach Kauf | ❌ Nicht vorhanden |
| Profil-Ausgabe nach Zahlung | ❌ Nicht vorhanden |

---

## 5. NÄCHSTE SCHRITTE (nach Priorisierung)

### Phase 1 — Kostenlose Version online bringen
1. ✅ Seelenprofil kostenlos (ABGESCHLOSSEN)
2. ⏳ Domain-Weiterleitung aktiv machen
3. ⏳ Push zu aevima.com

### Phase 2 — Premium-Technik
1. Backend aufsetzen (Node + Express oder Netlify Functions)
2. Stripe-Integration (checkout.html)
3. Webhook: `payment_intent.succeeded` → KI-Aufruf freischalten

### Phase 3 — Premium-Inhalt
1. Geldmuster → JSON konvertieren
2. Beziehungsmuster → aus v2 extrahieren und vervollständigen
3. KI-Prompt für Synthese und Lebenskompass definieren

---

*AEVIMA_STATUS_V1.md — 2026-06-07*
*Inventur ohne neue Inhalte. Reine Bestandsaufnahme.*
