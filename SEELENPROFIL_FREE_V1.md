# SEELENPROFIL FREE V1 — Konzept & Inhaltsarchitektur
**Version:** 1.0 | 2026-06-07
**Status:** Konzept — noch kein Code, kein Push
**Tokenkosten:** 0 € (rein statisch, kein API-Call)

---

## ZIEL

Eine kostenlose Analyse, die echte Wiedererkennung erzeugt —  
aber bewusst nicht alles beantwortet.

Der Nutzer soll mindestens dreimal denken: **"Das stimmt."**  
Und mindestens einmal: **"Woher wissen die das?"**

Die Analyse darf NICHT das Gefühl erzeugen: **"Ich habe schon alles bekommen."**

---

## EINGABEN

| Feld | Pflicht | Zweck |
|---|---|---|
| Vorname | ✅ | Herzwunsch + Ausdruckszahl |
| Geburtsdatum | ✅ | Lebenszahl + Geldmuster |
| Geburtszeit | Optional | Spätere Premium-Nutzung (wird gespeichert, nicht verarbeitet) |
| Geburtsort | Optional | Spätere Premium-Nutzung (wird gespeichert, nicht verarbeitet) |

---

## BERECHNUNGSREGELN (reine Logik — kein Code)

### Lebenszahl
1. Alle Ziffern des Geburtsdatums addieren (TT + MM + JJJJ)
2. Quersumme bilden, bis einstellig
3. **Ausnahme:** 11, 22, 33 sind Meisterzahlen — nicht weiter reduzieren
4. Gültige Werte: **1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33**

Beispiel: 01.05.1989 → 0+1+0+5+1+9+8+9 = 33 → Meisterzahl 33 ✓

### Herzwunsch (Soul Urge)
Buchstabenwerte nach Pythagoräischer Tabelle (nur Vokale: A, E, I, O, U):

| A | E | I | O | U |
|---|---|---|---|---|
| 1 | 5 | 9 | 6 | 3 |

Sonderregel: Y wird als Vokal behandelt, wenn kein anderer Vokal in der Silbe steht.  
Umlaute: Ä=1 (wie A), Ö=6 (wie O), Ü=3 (wie U)  
Alle Vokale des vollen Vornamens addieren → Quersumme bis einstellig (Meisterzahlen beachten)

### Ausdruckszahl (Expression / Destiny)
Alle Buchstaben des Vornamens nach Pythagoräischer Tabelle:

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|
| A | B | C | D | E | F | G | H | I |
| J | K | L | M | N | O | P | Q | R |
| S | T | U | V | W | X | Y | Z |   |

Umlaute: Ä=1, Ö=6, Ü=3  
Alle Buchstaben addieren → Quersumme bis einstellig (Meisterzahlen beachten)

### Geldmuster
Wird von der **Lebenszahl** abgeleitet.  
Kein eigenständiger Berechnungsschritt — teilt die 12 Zahlenwerte der Lebenszahl.

---

## KOSTENLOSE ANALYSE — INHALTSSTRUKTUR

Die Ausgabe besteht aus 4 Abschnitten + Einleitung + Abschluss.  
Jeder Abschnitt endet mit einer **offenen Schleife**.

---

### EINLEITUNG (dynamisch, aber statisch)

Template:
```
"[Vorname], was folgt, ist kein allgemeines Profil.
Es basiert auf den Mustern, die dein Geburtsdatum und dein Name tragen.
Manche Abschnitte werden sich vertraut anfühlen.
Andere vielleicht unerwartet präzise."
```

Kein API-Call. Nur Variablenersatz des Vornamens.

---

### ABSCHNITT 1 — LEBENSZAHL

**Pro Zahl (12 Einträge):**
- `kernthema`: 2–3 Sätze. Das zentrale Thema dieses Lebens.
- `staerke`: 2 Sätze. Die Hauptstärke dieser Zahl.
- `herausforderung`: 2 Sätze. Die wiederkehrende innere Reibung.
- `offene_schleife`: 1 Satz. Überleitung zur Premium-Analyse.

**Offene Schleife (Beispiel):**
> "Wie dieses Kernthema deine wichtigsten Beziehungen und Wendepunkte prägt — das zeigt die vollständige Analyse."

**Visuelles Format:**
```
✦ LEBENSZAHL [X]
[kernthema]
[staerke]
[herausforderung]
[offene_schleife in kursiv, gedämpft]
```

---

### ABSCHNITT 2 — HERZWUNSCH

**Pro Zahl (12 Einträge):**
- `beduerfnis`: 2–3 Sätze. Das innere Bedürfnis, das antreibt.
- `motivation`: 2 Sätze. Woraus dieser Mensch Energie zieht.
- `offene_schleife`: 1 Satz.

**Offene Schleife (Beispiel):**
> "Wie dieser innere Antrieb deine Entscheidungen leitet — oft unbewusst — zeigt das vollständige Profil."

**Visuelles Format:**
```
✦ HERZWUNSCH
[beduerfnis]
[motivation]
[offene_schleife in kursiv, gedämpft]
```

---

### ABSCHNITT 3 — AUSDRUCKSZAHL

**Pro Zahl (12 Einträge):**
- `wirkung`: 3 Sätze. Wie dieser Mensch auf andere wirkt — oft ohne es selbst zu merken.
- `offene_schleife`: 1 Satz.

**Offene Schleife (Beispiel):**
> "Ob diese Wirkung deinen tiefsten Zielen dient — und wo sie dich manchmal bremst — zeigt die vollständige Ausdrucksanalyse."

**Visuelles Format:**
```
✦ AUSDRUCKSZAHL
[wirkung]
[offene_schleife in kursiv, gedämpft]
```

---

### ABSCHNITT 4 — GELDMUSTER

**Pro Zahl (12 Einträge):**
- `chancen`: 2 Sätze. Natürliche Stärken im Umgang mit Ressourcen.
- `sicherheit`: 2 Sätze. Was diesen Menschen sicher fühlen lässt — und was nicht.
- `umgang`: 2 Sätze. Typisches Verhaltensmuster mit Geld.
- `offene_schleife`: 1 Satz.

**Offene Schleife (Beispiel):**
> "Welche unbewussten Glaubenssätze dein Geldmuster wirklich formen — das zeigt die vollständige Analyse."

**Visuelles Format:**
```
✦ GELDMUSTER
[chancen]
[sicherheit]
[umgang]
[offene_schleife in kursiv, gedämpft]
```

---

### ABSCHLUSS (statisch)

```
"Diese Analyse zeigt Konturen.
Das vollständige AEVIMA Seelenprofil zeigt das ganze Bild:
Beziehungsmuster. Lebensthemen. Wiederkehrende Wendepunkte.
Was dich antreibt — und was dich manchmal aufhält.

✦ Vollständige Analyse freischalten"
```

---

## WAS NICHT IN DER KOSTENLOSEN VERSION ERSCHEINT

Diese Themen dürfen **nur angedeutet**, nie konkret beantwortet werden:

| Thema | Hinweis erlaubt | Details gesperrt |
|---|---|---|
| Beziehungsmuster | ✅ "Wie sich deine Lebenszahl in Beziehungen zeigt..." | ❌ Konkrete Muster |
| Berufung | ✅ "Deine Ausdruckszahl deutet auf..." | ❌ Konkrete Beschreibung |
| Lebensaufgabe | ✅ "Hinter deiner Lebenszahl steckt eine tiefere Aufgabe..." | ❌ Inhalt der Aufgabe |
| Persönlicher Lebenskompass | ❌ Gar nicht erwähnen | — |
| Wiederkehrende Lebensthemen | ✅ Existenz erwähnen | ❌ Welche Themen konkret |

---

## ERGEBNISLÄNGE

**Ziel:** 800–1.200 Wörter  
**Aufschlüsselung:**
- Einleitung: ~50 Wörter
- Lebenszahl: ~250 Wörter
- Herzwunsch: ~200 Wörter
- Ausdruckszahl: ~150 Wörter
- Geldmuster: ~250 Wörter
- Abschluss: ~80 Wörter

---

## BENÖTIGTE JSON-BAUSTEINE

### Liste aller Dateien

```
public/data/
├── preview_lebenszahl.json       ← 12 Einträge (1-9, 11, 22, 33)
├── preview_herzwunsch.json       ← 12 Einträge
├── preview_ausdruckszahl.json    ← 12 Einträge
├── preview_geldmuster.json       ← 12 Einträge
└── preview_template.json         ← Einleitung + Abschluss (statisch)
```

### Struktur je JSON (Beispiel: preview_lebenszahl.json)

```json
{
  "1": {
    "kernthema": "...",
    "staerke": "...",
    "herausforderung": "...",
    "offene_schleife": "..."
  },
  "2": { ... },
  ...
  "11": { ... },
  "22": { ... },
  "33": { ... }
}
```

### Gesamtumfang Textarbeit

| Datei | Einträge | Felder pro Eintrag | Texte gesamt |
|---|---|---|---|
| preview_lebenszahl.json | 12 | 4 | 48 |
| preview_herzwunsch.json | 12 | 3 | 36 |
| preview_ausdruckszahl.json | 12 | 2 | 24 |
| preview_geldmuster.json | 12 | 4 | 48 |
| preview_template.json | 1 | 2 | 2 |
| **Gesamt** | | | **158 Texte** |

Jeder Text: 2–3 Sätze. Keine KI-Generierung nötig — Texte werden einmalig verfasst und eingebettet.

---

## NÄCHSTE SCHRITTE (nach Freigabe dieses Dokuments)

1. **Texte verfassen** — alle 158 Bausteine schreiben (kann in Blöcken passieren)
2. **JSON-Dateien erstellen** — Texte in Struktur einpflegen
3. **Berechnungslogik** — `previewData.js` mit reinem JavaScript (keine API)
4. **UI-Integration** — Ergebnis-Seite in AEVIMA einbinden
5. **Paywall-Übergang** — nach Preview nahtlos zum Kauf führen

---

## QUALITÄTSREGEL FÜR ALLE TEXTE

- **Keine Floskeln.** Kein "Du bist ein besonderer Mensch."
- **Keine falschen Versprechungen.** Kein "Du wirst erfolgreich sein."
- **Keine Banalitäten.** Kein "Du liebst es, Zeit mit Familie zu verbringen."
- **Konkret genug** um Wiedererkennung zu erzeugen.
- **Offen genug** um Neugier auf die Premium-Version zu wecken.
- **Ton:** Ruhig, präzise, respektvoll — wie ein erfahrener Beobachter, kein Coach.

---

*SEELENPROFIL_FREE_V1.md — Version 1.0 | 2026-06-07*
*Kein Code. Kein Push. Warte auf Freigabe.*
