# AEVIMA — PROFILE UI SYSTEM
**Version:** 1.0 | 2026-06-03
**Zweck:** Vollständige Definition der Seelenprofil-Ergebnisseite
**Status:** Verbindlich für alle Design- und Entwicklungsentscheidungen

---

## 1. Hero-Bereich

### Zweck
Erste 5 Sekunden entscheiden ob der Nutzer scrollt. Der Hero validiert: "Du bist hier richtig."

### Aufbau

```
[AEVIMA Symbol — 60px, Rose Gold, zentriert]

[Vorname]
[Cinzel, ~1.4rem, Rose-Hell, letter-spacing 0.15em]

[LZ-Badge]
[Lebenszahl als große Zahl: Cinzel, 4–5rem, Rose Gold]

[LZ-Archetypname]
[Cinzel, ~1.1rem, Rose-Hell, letter-spacing 0.1em]

[Meisterzahl-Badge — wenn zutreffend: "✦ MEISTERZAHL", Türkis, Border]

[Divider — 60px, 1px, Gradient Rose Gold]

[Teaser-Text des Archetyps]
[Raleway 300, ~0.95rem, Gedämpft, max. 500px, line-height 1.9]
```

### Emotionale Wirkung
Der Hero sagt: "Ich weiß wer du bist."
Nicht: "Herzlich willkommen bei deiner Analyse."

**Regel:** Kein Datum. Keine technischen Infos. Nur: Name, Zahl, Archetyp, Kern.

---

## 2. Reihenfolge der Säulen

```
1. Herzwunsch           → emotionalste Eröffnung
2. Beziehungsmuster     → stärkster Kaufmoment
3. Ausdruckszahl        → einzigartiges Territorium
4. Geldmuster           → kognitiver Abschluss
```

**Begründung:**

Herzwunsch öffnet das Profil emotional — es trifft das Innerste.
Beziehungsmuster hat die stärksten Wiedererkennungsmomente (Bruchpunkt) — maximaler Kaufdruck.
Ausdruckszahl liefert eine Perspektive die nirgendwo sonst existiert — hält die Aufmerksamkeit.
Geldmuster schließt mit Handlungsrelevanz — erhöht wahrgenommenen Wert.

**Ausnahme:** Wenn Nutzer nach Kauf die Seite erneut lädt, bleiben alle Säulen vollständig sichtbar. Keine erneute Paywall.

---

## 3. Aufbau jeder Säule

### 3.1 Allgemeines Säulen-Layout

```
[Säulen-Kopf]
  ├── Symbol-Ikon (16px, spezifisch pro Säule)
  ├── Säulen-Titel: "DEIN HERZWUNSCH" [Cinzel, 0.7rem, letter-spacing 0.2em, Rose]
  └── Divider [30px, 1px, Türkis]

[Frei sichtbarer Inhalt]
  ├── Abschnitt: Das Muster / Der Ausdruck / Die Sehnsucht
  └── Max. 3–4 Sätze, Raleway 300, Gedämpft

[PAYWALL GRENZE]

[Premium-Inhalt — gesperrt]
  ├── Blinder Fleck / Der Bruchpunkt / Das Missverständnis
  ├── Die Einladung
  └── Was möglich wird

[Was möglich wird — Abschluss]
  ├── 3 Fragen: Was hört auf / Was wird möglich / Was kommt zurück
  └── Letzte Zeile immer stärkster Satz

[CTA]
```

### 3.2 Säulen-spezifische Icons (16–18px, als subtile Akzente)

| Säule | Konzept | Farbe |
|---|---|---|
| Herzwunsch | Kleines Herz-Outline | Rose Gold |
| Beziehungsmuster | Zwei verbundene Bögen | Türkis |
| Ausdruckszahl | Zwei Kreise ineinandergreifend | Rose-Hell |
| Geldmuster | Waageschale | Smaragd |

---

## 4. Paywall-Architektur

### 4.1 Grundprinzip

```
FREI         BEZAHLT
─────        ──────────────────────────────
Erkenntnis   Erkenntnis + Kaufmoment + Hoffnung
```

### 4.2 Was ist frei sichtbar?

| Element | Sichtbarkeit |
|---|---|
| Hero (Name, LZ, Archetyp, Teaser) | Vollständig frei |
| Herzwunsch: Sehnsucht (1. Abschnitt) | Frei — erste 3–4 Sätze |
| Beziehungsmuster: Das Muster (1. Abschnitt) | Frei |
| Ausdruckszahl: Der Ausdruck (1. Abschnitt) | Frei |
| Geldmuster: Verhaltensmuster (1. Abschnitt) | Frei |
| Lebenszahl-Teaser | Vollständig frei |
| Persönliches Jahr: Überblick | Frei |
| Pinnacle aktuell: Kurzbeschreibung | Frei |

### 4.3 Was ist gesperrt (Paywall)?

| Element | Gesperrt |
|---|---|
| Herzwunsch: Innerer Konflikt + Blinder Fleck + Entwicklungsaufgabe + Was möglich wird | ✓ |
| Beziehungsmuster: Die Anziehung + Der Bruchpunkt + Die Einladung + Was möglich wird | ✓ |
| Ausdruckszahl: Das Missverständnis + Blinder Fleck + Die Einladung + Was möglich wird | ✓ |
| Geldmuster: Innerer Konflikt + Blinder Fleck + Entwicklungsaufgabe | ✓ |
| Herzwunsch Kombination (LZ × Seelenzahl) | ✓ |
| Vollständige Pinnacle-Analyse | ✓ |
| Ausdruckszahl-Analyse vollständig | ✓ |

### 4.4 Paywall-Visual

```
[Frei sichtbarer Text — vollständig lesbar]

[Übergangszeile — letzter freier Satz leicht ausgeblendet]

[BLUR-OVERLAY beginnt hier]
  ├── 3–4 Zeilen unlesbar verschwommener Text (backdrop-filter: blur(8px))
  ├── Gradient: transparent → Nacht (unten)
  └── Zentrierter Paywall-Block auf dem Overlay:

      [AEVIMA Symbol, 40px, Rose Gold]
      [Kleiner Text: "Vollständige Analyse"]
      [Preis: Cinzel, 2rem, Rose Gold: "27 €"]
      [Unter-Text: Raleway 300, Gedämpft: "Einmalig. Keine Mitgliedschaft."]
      [CTA-Button: Smaragd, Full-Width, "✦ Analyse entsperren"]
```

### 4.5 Paywall-Ton

Kein: "Premium freischalten!" / "Jetzt kaufen!"
Ja: "Vollständige Analyse" / "Entsperren" / "Mehr sehen"

Das Paywall-Element schreibt nicht über Kauf — es öffnet einen Raum.

---

## 5. CTA-System

### 5.1 CTA nach jeder Säule (Paywall-Bereich)

| Säule | CTA-Text |
|---|---|
| Herzwunsch | "✦ Dein Herzwunsch vollständig lesen" |
| Beziehungsmuster | "✦ Dein Beziehungsmuster entsperren" |
| Ausdruckszahl | "✦ Vollständige Analyse ansehen" |
| Geldmuster | "✦ Vollständige Analyse freischalten" |

**Alternative (Single-CTA am Ende aller Teaser):**
```
"✦ Alle vier Säulen entsperren — 27 €"
[Smaragd, Full-Width, Cinzel 0.85rem, letter-spacing 0.2em]
```

### 5.2 CTA nach abgeschlossener Analyse (nach Kauf)

Nach vollständiger Lektüre erscheint am Ende der Seite:

```
[Divider]
[AEVIMA Symbol, 32px]
[Cinzel, 0.8rem: "WAS ALS NÄCHSTES?"]
[Raleway 300, Gedämpft: kurze Einleitung]

CTA 1: "✦ Synastrie — Eure Seelenverbindung" [Türkis, sekundär]
CTA 2: "✦ Kosmischer Kalender — Dein Jahr" [Rose Gold, sekundär]
```

### 5.3 CTA-Design-Regeln

```css
/* Primary CTA */
background: linear-gradient(135deg, #1E7A52, #167044);
color: #EDE9E2;
font-family: 'Cinzel', serif;
font-size: 0.85rem;
font-weight: 700;
letter-spacing: 0.2em;
padding: 16px 48px;
min-height: 52px;
width: 100%; /* mobile */
border: none;
border-radius: 2px;
cursor: pointer;

/* Hover */
transform: translateY(-2px);
box-shadow: 0 8px 30px rgba(30, 122, 82, 0.35);
```

---

## 5b. CTA — Formulierungen & Intensität

### Stufe 1 — Nach Herzwunsch (höchste Intensität, erster Kaufdruck)

```
„❖ Deinen vollständigen Herzwunsch lesen“
```

- Smaragd, Full-Width
- Darunter in Raleway 300, Gedämpft:
  `„Einmalig 27 € — alle vier Bereiche.“`
- Intensität: Einladend, kein Druck. Preis sichtbar — aber nicht prominent.

### Stufe 2 — Nach Beziehungsmuster (zweiter Kaufdruck, stärker)

```
„❖ Deinen Bruchpunkt verstehen“
```

- Smaragd, Full-Width
- Darunter: `„Und was danach möglich wird.“`
- Intensität: Konkreter, nutzt den Bruchpunkt-Kontext

### Stufe 3 — Nach Ausdruckszahl

```
„❖ Vollständige Analyse freischalten“
```

- Smaragd, Full-Width
- Keine Zusatz-Info — der Kontext reicht
- Intensität: Neutral, vertrauend

### Stufe 4 — Nach Geldmuster (letzter CTA, höchste Dringlichkeit erlaubt)

```
„❖ Alle vier Bereiche freischalten — 27 €“
```

- Smaragd, Full-Width
- Darunter: `„Einmalig. Kein Abo. Kein Risiko.“`
- Intensität: Konkret, Preis + Gegenargument in einer Zeile

### Was verboten ist

- „Jetzt kaufen!“
- „Nur heute!“
- „Sei jetzt bereit für Veränderung!“
- Countdown-Timer
- Erfolgs-Versprechen als CTA-Subtext

---

## 6. Mobile Layout

### Schriftgrößen Mobile

| Element | Größe |
|---|---|
| Hero Name | 1.2rem, Cinzel |
| LZ-Badge (Zahl) | 3rem, Cinzel |
| Archetypname | 0.9rem, Cinzel |
| Teaser-Text | 0.88rem, Raleway 300 |
| Säulentitel | 0.65rem, Cinzel, letter-spacing 0.2em |
| Analyse-Text | 0.88rem, Raleway 300, line-height 1.9 |
| CTA-Text | 0.8rem, Cinzel, letter-spacing 0.18em |
| Preis | 1.6rem, Cinzel |

### Abstände Mobile

| Bereich | Wert |
|---|---|
| Hero-Padding vertikal | 48px |
| Sektions-Padding vertikal | 48px |
| Karten-Padding | 20px |
| Zwischen Absätzen | 16px |
| Ornament-Linie Margin | 32px vertikal |
| Symbol-Abstand zu Text | 24px |

### Scrollverhalten

- Kein Sticky-Header der Platz wegnimmt (max. 44px header height)
- CTA bei Paywall: fixed bottom für 4 Sekunden, dann statisch (optional A/B-Test)
- Paywall-Block: immer vollständig sichtbar ohne horizontales Scrollen
- Smooth-Scroll zwischen Säulen wenn Nutzer auf Säulen-Anker klickt

### CTA-Größen Mobile

```css
button.cta-primary {
  width: 100%;
  min-height: 52px;
  padding: 16px 24px;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
}
```

### Touch-Regeln

- Alle Bereiche mit Paywall-Overlay: Tap auf Overlay öffnet Kauf-Flow
- Kein Double-Tap-Zoom auf Analyse-Text (font-size ≥ 16px oder `touch-action: manipulation`)
- iOS Safe-Area-Insets berücksichtigen (env(safe-area-inset-bottom))

---

## 7. Symbolintegration

### 7.1 Hero

```
[AEVIMA Symbol, 60px, Rose Gold, zentriert]
[24px Abstand nach unten]
[Name + LZ]
```

Das Symbol begrüßt. Kein Text notwendig. Kein Tagline daneben.
Es sagt: du bist angekommen.

### 7.2 Zwischen Säulen

Kein Symbol zwischen Säulen — nur Ornament-Linie.
Das Symbol erscheint nur im Hero und im Abschluss.

Ausnahme: Paywall-Overlay zeigt das Symbol (40px) als Hter über dem Preis.
Hier kommuniziert es: was hinter diesem Symbol liegt, hat Gewicht.

### 7.3 Abschlussbereich

```
[Symbol, 32px, Rose Gold, zentriert]
[12px Abstand]
[Schlusstitel, Cinzel, 0.7rem, letter-spacing 0.2em: "WAS BLEIBT"]
```

### 7.4 Kaufbestätigung

Nach erfolgreichem Kauf: Symbol kurz animiert (Schleifen entstehen, 2 Sekunden), dann still.
Message darunter:

```
„Deine vollständige Analyse ist jetzt sichtbar.“
[Raleway 300, Gedämpft]
```

Keine Konfetti. Keine Glückwünsche. Keine Motivation.
Nur: Stille. Symbol. Ankunft.

---

## 8. Abschlussbereich

### Philosophie des Abschlusses

Nach Regel 12: Veranderung allein ist nicht das Ziel. Rückkehr ist das Ziel.

Der Nutzer soll die Seite verlassen mit dem Gefühl:

> "Ich habe nichts Neues bekommen.
> Ich habe etwas wiedergefunden."

### Aufbau

```
[Ornament-Linie]

[Symbol, 32px]

[Schlusstitel: "WAS BLEIBT"]
[Cinzel, 0.7rem, letter-spacing 0.2em, Rose Gold]

[Abschlusstext]
[Raleway 300, ~0.9rem, Gedämpft, max. 580px, line-height 1.9]

[Abstand: 32px]

[Weiter-CTAs wenn Post-Kauf, oder leere Stille wenn kostenfrei]

[Footer (minimal): Symbol 20px | aevima.com]
```

### Abschlusstext (verbindlich)

```
Du hast heute Muster gesehen, die immer da waren.
Du hast nichts Neues bekommen.
Du hast etwas wiedergefunden.

Was du damit machst, entscheidest du.
```

[Raleway 300, Gedämpft, zentriert]

### Was der Abschluss nicht macht

- Kein: „Jetzt starte deine Reise!“
- Kein: „Teile dein Profil mit Freunden!“
- Kein: „Kaufe auch Synastrie!“ (dieser CTA erscheint vor dem Abschluss-Text, nicht danach)
- Kein Ausrufezeichen
- Keine Motivationssprache

### Stille als Design-Entscheidung

Nach dem Abschlusstext: kein Element bis zum Footer.
60px Weißraum. Dann Footer.

Das ist die einzige Seite von AEVIMA, die bewusst mit Stille endet.

---

## 6b. Visuelle Trennung zwischen Säulen

```
[Inhalt Säule 1 endet]

[Ornament-Linie]
├── Breite: 80px
├── Höhe: 1px
├── Farbe: Gradient transparent → Rose → transparent
└── Margin: 48px vertikal

[Säule 2 beginnt]
```

**Keine vollen horizontalen Linien.** Kein harter Abschnittswechsel ohne Luft.
Die Säulen sollen fließen — kein Gefühl von "nächste Rubrik".

---

## 7. Seiten-Struktur Gesamtübersicht

```
┌─────────────────────────────────────┐
│  AEVIMA Symbol (60px)               │
│  Vorname + LZ + Archetyp            │  ← Hero
│  Teaser                             │
├─────────────────────────────────────┤
│  ✦ DEIN HERZWUNSCH                  │
│  Sehnsucht (frei)                   │  ← Frei
│  ─────── PAYWALL ───────            │
│  [Innerer Konflikt, BF, Einladung]  │  ← Bezahlt
│  [Was möglich wird]                 │
│  [CTA: Entsperren / Preis]          │
├─────────────────────────────────────┤
│  ✦ DEIN BEZIEHUNGSMUSTER            │
│  Das Muster (frei)                  │  ← Frei
│  ─────── PAYWALL ───────            │
│  [Anziehung, Bruchpunkt, Einladung] │  ← Bezahlt
│  [Was möglich wird]                 │
│  [CTA]                              │
├─────────────────────────────────────┤
│  ✦ DEIN AUSDRUCK                    │
│  Der Ausdruck (frei)                │  ← Frei
│  ─────── PAYWALL ───────            │
│  [Missverständnis, BF, Einladung]   │  ← Bezahlt
│  [Was möglich wird]                 │
│  [CTA]                              │
├─────────────────────────────────────┤
│  ✦ GELD & INNERES MUSTER            │
│  Verhaltensmuster (frei)            │  ← Frei
│  ─────── PAYWALL ───────            │
│  [Konflikt, BF, Entwicklung]        │  ← Bezahlt
│  [CTA / Gesamtpreis]                │
├─────────────────────────────────────┤
│  Persönliches Jahr (Kurzform, frei) │
│  Pinnacle aktuell (Kurzform, frei)  │
├─────────────────────────────────────┤
│  [Nach Kauf: Weiter-CTAs]           │
│  AEVIMA Symbol (20px)               │
│  Footer (minimal)                   │
└─────────────────────────────────────┘
```

---

## 8. Mobil-spezifische Anpassungen

- Hero: Symbol 40px, LZ-Badge 3rem, Teaser-Text max. 90% Breite
- Paywall-Block: vollständig sichtbar ohne Scrollen
- CTA immer Full-Width (`width: 100%`)
- Abschnittstittel: Zeilenumbruch erlaubt
- Ornament-Linie: 60px (statt 80px)

---

*PROFILE_UI_SYSTEM.md — Version 1.0 | 2026-06-03*
*Verbindlich für die Entwicklung der Seelenprofil-Ergebnisseite.*
