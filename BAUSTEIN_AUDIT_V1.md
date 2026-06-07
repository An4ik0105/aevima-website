# AEVIMA — BAUSTEIN-AUDIT V1
**Erstellt:** 2026-06-07
**Zweck:** Vergleich ursprüngliche 158-Bausteine-Architektur mit aktueller Profil-Architektur

---

## 1. URSPRÜNGLICHE ARCHITEKTUR (SEELENPROFIL_FREE_V1.md)

**Stand:** Früher Entwurf — vor der verbindlichen Produktarchitektur (AEVIMA_SEELENPROFIL_V1.md)

| Datei (ursprünglich) | Einträge | Felder | Texte |
|---|---|---|---|
| preview_lebenszahl.json | 12 | 4 | 48 |
| preview_herzwunsch.json | 12 | 3 | 36 |
| preview_ausdruckszahl.json | 12 | 2 | 24 |
| preview_geldmuster.json | 12 | 4 | **48** |
| preview_template.json | 1 | 2 | 2 |
| **Gesamt** | | | **158** |

**Felder ursprünglich:**
- LZ: Kernthema · Stärke · Herausforderung · Offene Schleife
- HWZ: Inneres Bedürfnis · Motivation · Offene Schleife
- AZ: Wirkung · Offene Schleife
- Geldmuster: Chancen · Sicherheit · Umgang · Offene Schleife

**Geldmuster war ursprünglich kostenlos geplant.** Diese Entscheidung wurde später revidiert.

---

## 2. AKTUELLE ARCHITEKTUR (AEVIMA_SEELENPROFIL_V1.md — verbindlich)

| Datei (aktuell) | Einträge | Felder | Texte |
|---|---|---|---|
| preview_lebenszahl.json | 12 | 6 | 72 |
| preview_herzwunsch.json | 12 | 6 | 72 |
| preview_ausdruckszahl.json | 12 | 6 | 72 |
| **Gesamt** | | | **216** |

**Felder aktuell (je JSON identisch):**
1. `kernthema` — Wer du bist / was du willst / wie du wirkst
2. `staerke` — Die positive Manifestation
3. `herausforderung` — Die innere Reibung
4. `wiedererkennung` — Spezifischer Satz der Wiedererkennung erzeugt
5. `aevima_moment` — Psychologisch präzise Frage (blinder Fleck)
6. `premium_uebergang` — Natürlicher Übergang zur Vollversion

---

## 3. VERGLEICH: WAS HAT SICH GEÄNDERT?

| Dimension | Ursprung | Aktuell | Bewertung |
|---|---|---|---|
| Anzahl Texte gesamt | 158 | 216 | +58 mehr — höhere Qualität |
| Felder pro JSON | 2–4 | 6 einheitlich | Konsistenter |
| Geldmuster kostenlos | ✅ Geplant | ❌ Premium | Strategisch besser |
| Offene Schleife | 1 Feld | Aufgeteilt in `aevima_moment` + `premium_uebergang` | Qualitätsgewinn |
| Wiedererkennungs-Satz | Nicht vorgesehen | ✅ Neues Pflichtfeld | Qualitätsgewinn |
| AEVIMA-Moment | Nicht vorgesehen | ✅ Kernstück der Architektur | Qualitätsgewinn |
| Geldmuster (kostenlos) | 48 Texte geplant | 0 — in Premium verschoben | Intentional |

---

## 4. WERDEN DIE 158 BAUSTEINE NOCH BENÖTIGT?

**Nein — aus folgenden Gründen:**

### 4a. Ersetzt durch bessere Architektur
Die 158 Bausteine hatten 2–4 Felder pro Eintrag. Die aktuelle Architektur hat 6 Felder pro Eintrag, inklusive `aevima_moment` und `wiedererkennung` — beides war im ursprünglichen Plan nicht vorgesehen. Die aktuelle Version ist qualitativ überlegen.

### 4b. Geldmuster-Verschiebung war korrekt
Das ursprüngliche Konzept sah Geldmuster als kostenlosen Inhalt vor (48 Texte). Die Entscheidung, Geldmuster in Premium zu verschieben, war strategisch richtig:
- Schärfere Positionierung des Paywall-Moments
- Stärkerer Anreiz zum Kauf
- Geldmuster hat hohe emotionale Zugkraft → besser als Premium-Teaser

### 4c. Funktionierende Alternative vorhanden
Die Funktion der 158 Bausteine war: statische Texte für die kostenlose Vorschau liefern.
Diese Funktion wird durch 216 Texte in 3 JSONs vollständig erfüllt — mit höherer Qualität.

---

## 5. WAS FEHLT TATSÄCHLICH?

### Für die kostenlose Version: **Nichts**
Alle 3 Zahlen (LZ · HWZ · AZ) sind vollständig mit je 6 Feldern pro Zahl. ✅

### Für die Vollversion (Premium):

| Baustein | Ursprung | Status | Notiz |
|---|---|---|---|
| Geldmuster (Premium) | `CONTENT_GELD_LZ.md` | ✅ Vorhanden — braucht JSON | 12 LZ, hochwertig |
| Beziehungsmuster | `seelenprofil-v2.html` (teilweise) | ⚠️ Unvollständig | LZ 1,4,6,9,22,33 vorhanden |
| Innere Spannungsfelder | Nirgends | ❌ Nicht vorhanden | Neu erstellen |
| Persönliche Synthese | KI-generiert | ❌ Kein Prompt definiert | Nach Zahlung |
| Lebenskompass | KI-generiert | ❌ Kein Prompt definiert | Nach Zahlung |
| HWZ-Kombinationen (LZ×HWZ) | `CONTENT_HERZWUNSCH_KOMBINATIONEN.md` | ⚠️ ~15 von 144 | Aufwendig → KI |

---

## 6. EMPFEHLUNG

| Frage | Antwort |
|---|---|
| Die 158 Bausteine noch bauen? | **Nein** — überholt durch bessere Architektur |
| Geldmuster-JSON erstellen? | **Ja** — Inhalt vorhanden, nur Konvertierung nötig |
| Beziehungsmuster vervollständigen? | **Teilweise** — vorhandene Texte nutzen + fehlende per KI |
| Spannungsfelder erstellen? | **Optional** — kann KI-generiert werden (Premium) |
| Synthese/Lebenskompass? | **KI-generiert** — kein statischer Inhalt nötig |
| Nächster sinnvoller Schritt? | **Backend + Stripe** — damit überhaupt Käufe möglich sind |

---

## 7. FAZIT

Die 158 ursprünglichen Bausteine sind **kein offenes To-do mehr.**

Sie wurden konzeptionell ersetzt durch:
- 216 Texte in 3 JSONs (qualitativ besser)
- Geldmuster in Premium verschoben (strategisch besser)
- AEVIMA-Moment als Kernstück (inhaltlich besser)

Die kostenlose Version ist vollständig.
Die Premium-Version braucht primär **Technik** (Backend, Stripe) — nicht mehr Texte.

---

*BAUSTEIN_AUDIT_V1.md — 2026-06-07*
*Keine neuen Texte. Reine Analyse.*
