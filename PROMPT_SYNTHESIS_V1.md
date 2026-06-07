# AEVIMA — PROMPT SYNTHESIS V1
**Version:** 1.0 | 2026-06-07
**Status:** Architektur — kein Code, kein Prompt-Text
**Maximalumfang:** 500 Wörter

---

## KONTEXT

Die KI erhält nach bestätigter Zahlung alle statischen Profildaten.
Sie wiederholt nichts. Sie verbindet.

---

## 1. EINGABEDATEN FÜR DIE KI

| Datenpunkt | Quelle | Format |
|---|---|---|
| Lebenszahl | Berechnet aus Geburtsdatum | Zahl (1–9, 11, 22, 33) |
| Herzwunschzahl | Berechnet aus Vornamen + Nachnamen (Vokale) | Zahl (1–9, 11, 22, 33) |
| Ausdruckszahl | Berechnet aus Vornamen + Nachnamen (alle Buchstaben) | Zahl (1–9, 11, 22, 33) |
| Geldmuster-Text | Aus `CONTENT_GELD_LZ.md` (LZ-basiert) | Text (4 Felder: Muster · Konflikt · Blinder Fleck · Aufgabe) |
| Beziehungsmuster-Text | Aus `seelenprofil-v2.html` (LZ-basiert) | Text (5 Felder: Muster · Anziehung · Bruchpunkt · Einladung · Möglichkeit) |

Die KI liest diese Daten als Input — sie reproduziert sie **nicht** in der Ausgabe.

---

## 2. AUSGABE DER KI (4 ABSCHNITTE)

### Abschnitt 1 — Innere Spannungsfelder

**Frage:** Wo ziehen die drei Zahlen in unterschiedliche Richtungen?

Die KI analysiert Widersprüche zwischen LZ, HWZ und AZ:
- Wo widerspricht die innere Sehnsucht (HWZ) dem äußeren Bild (AZ)?
- Wo kostet die Lebenszahl mehr Energie als sie gibt?
- Welche Spannung erklärt wiederkehrende Entscheidungsprobleme?

### Abschnitt 2 — Wiederkehrende Muster

**Frage:** Was verbindet Geldmuster und Beziehungsmuster?

Die KI sucht den gemeinsamen Kern:
- Welcher Glaubenssatz liegt beiden Mustern zugrunde?
- Wo verstärkt das Beziehungsmuster das Geldmuster (oder umgekehrt)?
- Welche Situation löst beide Muster gleichzeitig aus?

### Abschnitt 3 — Persönliche Synthese

**Frage:** Was bedeuten alle Zahlen zusammen?

Die KI verbindet LZ + HWZ + AZ zu einem Gesamtbild:
- Was ist die tiefste Stärke dieser Zahlenkombination?
- Was ist die häufigste Falle?
- Welcher Satz beschreibt den inneren Kern dieser Person am präzisesten?

### Abschnitt 4 — Persönlicher Lebenskompass

**Frage:** Was ist der konkrete nächste Schritt?

Die KI liefert 3 Entwicklungsimpulse — keine Motivationsphrasen:
- Spezifisch für diese Zahlenkombination
- Bezogen auf ein reales Muster aus dem Profil
- Konkret formuliert (nicht: "Sei ehrlicher mit dir" — sondern: was genau, in welchem Kontext)

---

## 3. WAS DIE KI NICHT WIEDERHOLT

| Inhalt | Grund |
|---|---|
| Kernthema / Stärke / Herausforderung der einzelnen Zahlen | Bereits in der kostenlosen Version gezeigt |
| AEVIMA-Momente der Zahlen | Bereits geöffnete Schleifen — nicht erneut öffnen |
| Geldmuster-Text wörtlich | Liegt dem Nutzer bereits als Textblock vor |
| Beziehungsmuster-Text wörtlich | Liegt dem Nutzer bereits als Textblock vor |
| Allgemeine Numerologie-Erklärungen | Kein Lehrtext |

---

## QUALITÄTSREGEL FÜR DIE KI

```
Nicht: mehr Text
Nicht: Zusammenfassung der Eingabe
Nicht: Motivation oder Coaching

Ja: Verbindungen
Ja: Widersprüche benennen
Ja: Konkrete Muster beschreiben
Ja: Eine Sache pro Abschnitt — präzise
```

---

## TOKENBUDGET (Richtwert)

| Abschnitt | Zielumfang |
|---|---|
| Innere Spannungsfelder | ~150 Wörter |
| Wiederkehrende Muster | ~150 Wörter |
| Persönliche Synthese | ~200 Wörter |
| Lebenskompass | ~150 Wörter |
| **Gesamt** | **~650 Wörter** |

---

*PROMPT_SYNTHESIS_V1.md — Version 1.0 | 2026-06-07*
*Kein Prompt-Text. Nur Architektur.*
