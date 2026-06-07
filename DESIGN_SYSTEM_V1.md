# AEVIMA DESIGN SYSTEM V1
**Version:** 1.0 | 2026-06-03
**Status:** Verbindlich für alle Design- und Entwicklungsentscheidungen

---

## 1. Markenwirkung

**Wie fühlt sich AEVIMA emotional an?**

Ruhig. Klar. Tief.
Wie ein Gespräch mit jemandem, der wirklich zuhört — ohne Eile, ohne Agenda.

AEVIMA fühlt sich an wie:
- Ein gut beleuchteter Raum, in dem niemand etwas beweisen muss
- Ein Buch das man nicht weglegen will — nicht weil es spannend ist, sondern weil es trifft
- Das Gefühl nach einem Gespräch, das sich ehrlich angefühlt hat

**Positionierungs-Referenzen:**
Aesop (Premium ohne Lautstärke), Everymind (psychologische Tiefe), Kinfolk (Ästhetik der Stille), MBTI-Alternative mit Haltung

**Nicht wie:**
Apps mit bunten Chakra-Rädern, Horoskop-Websites, Coaching-Portale mit Motivation-Wallpaper

---

## 2. Farbwelt

### 2.1 Primärfarben (Grundgerüst)

| Name | Hex | Verwendung |
|---|---|---|
| **Tief-Schwarz** | `#0F0E14` | Haupthintergrund (Default) |
| **Nacht** | `#18161F` | Sekundärer Hintergrund, Karten |
| **Off-White** | `#EDE9E2` | Primärer Text |
| **Gedämpft** | `#8B7FA0` | Sekundärer Text, Labels, Hints |

### 2.2 Akzentfarben

| Name | Hex | Verwendung |
|---|---|---|
| **Smaragd** | `#1E7A52` | Philosophie-Elemente, Premium-Badge, starke CTAs |
| **Smaragd-Hell** | `#2AA06D` | Hover auf Smaragd, aktive Zustände |
| **Türkis** | `#2AAFA0` | Sekundärer Akzent, Zitate, Trennelemente |
| **Türkis-Dunkel** | `#1D7A70` | Hover auf Türkis |
| **Rose Gold** | `#C4956A` | Menschliche Wärme, Herzwunsch-Inhalte, Zahlen |
| **Rose-Hell** | `#E8C4A0` | Highlights, aktive Selections |
| **Rose-Dunkel** | `#9B6F4A` | Hover, Pressedzustand |

### 2.3 CTA-Farben

| Zustand | Farbe | Hex |
|---|---|---|
| Primary CTA (Kaufen) | Smaragd | `#1E7A52` |
| Primary CTA Hover | Smaragd-Hell | `#2AA06D` |
| Secondary CTA | Rose Gold | `#C4956A` |
| Secondary CTA Hover | Rose-Dunkel | `#9B6F4A` |
| Ghost CTA (transparent) | Border: Off-White 30% | — |

**Regel:** Kein CTA in Rot. Kein CTA in Orange. Kein "Jetzt kaufen" in knalligen Farben.

### 2.4 Hintergründe

| Bereich | Farbe |
|---|---|
| Seiten-Hintergrund | `#0F0E14` (Tief-Schwarz) |
| Abschnitt-Hintergrund alt | `#18161F` (Nacht) |
| Karten | `rgba(30, 28, 38, 0.8)` |
| Paywall-Overlay | `rgba(15, 14, 20, 0.92)` + Blur |
| Premium-Karte (hervorgehoben) | `rgba(30, 122, 82, 0.08)` + Smaragd-Border |
| Teaser-Karte (frei) | `rgba(196, 149, 106, 0.06)` + Rose-Border |

### 2.5 Borders

| Typ | Farbe |
|---|---|
| Standard | `rgba(196, 149, 106, 0.15)` |
| Aktiv | `rgba(42, 175, 160, 0.4)` |
| Premium | `rgba(30, 122, 82, 0.3)` |
| Paywall-Blur-Rand | `rgba(42, 175, 160, 0.2)` |

---

## 3. Schriftwelt

### 3.1 Headline Font — Cinzel

**Google Font:** `Cinzel` (400, 600, 700)
**Verwendung:** Alle Hauptüberschriften, Zahlen, Archetyp-Namen, Produkttitel
**Wirkung:** Klassisch, zeitlos, Autorität ohne Arroganz
**Niemals:** In Fließtext oder Body-Copy verwenden

```css
font-family: 'Cinzel', serif;
letter-spacing: 0.08em–0.2em;
```

### 3.2 Body Font — Raleway

**Google Font:** `Raleway` (300, 400, 500, 600)
**Verwendung:** Alle Fließtexte, Profilanalysen, Beschreibungen
**Wirkung:** Modern, leicht, lesbar — ohne technisch zu wirken
**Gewicht:** 300 für langen Text, 400 für normal, 600 für Emphasis

```css
font-family: 'Raleway', sans-serif;
font-weight: 300;
line-height: 1.8;
```

### 3.3 Button Font — Cinzel (klein)

```css
font-family: 'Cinzel', serif;
font-size: 0.75–0.85rem;
letter-spacing: 0.15–0.25em;
text-transform: uppercase;
font-weight: 700;
```

### 3.4 Zitatstil (Voice Library / Blinder Fleck)

Starke Sätze aus den Profilen die hervorgehoben werden:
```css
font-family: 'Raleway', sans-serif;
font-weight: 300;
font-style: italic;
font-size: 1.1–1.3rem;
line-height: 1.9;
color: var(--rose-l);
border-left: 2px solid var(--teal);
padding-left: 1.5rem;
```

### 3.5 Profilstil (Analyse-Text im Seelenprofil)

```css
font-family: 'Raleway', sans-serif;
font-weight: 300;
font-size: 0.9–0.95rem;
line-height: 1.9;
color: var(--muted);
```

Abschnittstittel (Das Muster, Der Blinde Fleck etc.):
```css
font-family: 'Cinzel', serif;
font-size: 0.7–0.75rem;
letter-spacing: 0.2em;
text-transform: uppercase;
color: var(--rose);
```

---

## 4. Weißraum-Regeln

**Grundprinzip:** Premium-Produkte haben mehr Raum als nötig. Enge ist billig. Weißraum ist Luxus.

| Element | Abstand |
|---|---|
| Sektions-Padding vertikal | 80–120px |
| Karten-Padding | 28–40px |
| Zwischen zwei Abschnitten einer Analyse | 20–28px |
| Zwischen Sektions-Titel und Inhalt | 16px |
| Max-Width Fließtext | 640–680px (single column) |
| Max-Width gesamt | 1200px |

**Regeln:**
- Niemals zwei gleichwertige Elemente direkt nebeneinander ohne Trenner
- Text-Blöcke nie breiter als 70 Zeichen pro Zeile
- Zwischenräume zwischen Analyse-Abschnitten müssen das Lesen verlangsamen — nicht beschleunigen
- Ornament-Linie zwischen Abschnitten: `60px breit, 1px, Gradient (transparent → Rose → transparent)`

---

## 5. Bildsprache

### 5.1 Erlaubte Bilder

| Kategorie | Beschreibung |
|---|---|
| Abstrakte Texturen | Marmor, Stein, Sand, Wasser-Oberflächen, Lichtreflexe |
| Licht-Phänomene | Diffuses Licht durch Glas, Lichtbrechung, Nebel |
| Natur-Details | Nahaufnahmen: Blatt-Adern, Wasser-Tropfen, Stein-Maserung |
| Menschliche Gesten | Hände, Silhouetten (kein Gesicht), Arm-Bewegungen |
| Architektur | Minimalistische Räume, leere Korridore, Fenster |
| Abstrakte Kunst | Geometrische Formen, Tiefenwirkung, keine Symbole |

**Farbfilter:** Alle Bilder durch dezenten Smaragd- oder Türkis-Overlay tonen, nie roh belassen

### 5.2 Verbotene Bilder

- Tierkreiszeichen-Symbole oder Horoskop-Räder
- Kristalle, Edelsteine als Symbolobjekte
- Tarot-Karten oder ähnliche Mystik-Symbolik
- Mondphasen als Illustration
- Frau in Meditationshaltung im Sonnenuntergang
- Mandala-Grafiken
- Chakra-Farbskalen
- Stock-Foto-Menschen die "glücklich meditieren"
- Glitzer, Funken, Sterne als Dekoration
- Schriftarten die wie "Magie" oder "Hexerei" aussehen

---

## 6. Symbol — Das AEVIMA-Zeichen

**Das Symbol:** Doppeltes Lemniskat-Muster (4 Schleifen, Unendlichkeitszeichen × 2)

**Material-Wirkung:** Rose Gold Metallic, 3D-Schimmer-Effekt, leichte Tiefe
**Hintergrund:** Immer auf Dunkel (Tief-Schwarz oder Nacht)
**Größen:** Icon (32px), Standard (80px), Hero (200px+)

**Was das Symbol bedeutet:** Kontinuität. Innere Bewegung. Kein Anfang, kein Ende — nur Fluss.
**Was es nicht bedeuten darf:** Mystik, Okkultismus, Unendlichkeit als spirituelles Klischee.

**SVG-Anforderung:** Das Symbol muss als SVG geliefert werden. Kein Pixelbild. Keine JPG-Kompression.

---

## 6b. Symbolsprache

**Das AEVIMA-Symbol ist der zentrale Wiedererkennungsanker der Marke.**

### Einsatz-Regeln

| Situation | Verwendung |
|---|---|
| Navigation / Header | Klein (24–32px), links oder mittig, kein Schriftzug daneben nötig |
| Landingpage Hero | Groß (120–200px), allein, viel Luft darum |
| Ladescreen | Animiert: Schleife entsteht langsam, Rose-Gold-Glänzen |
| Paywall | Symbol als stummer Hüter — kein Text, nur Symbol |
| Footer | Minimale Größe (20px), zentriert, dezent |
| Social Media | Symbol allein auf Dunkel — kein Text |

### Animations-Prinzip

Das Symbol darf sich langsam und ruhig animieren — nie springen, nie flackern.
Das Lemniskat-Muster kann eine kontinuierliche Fließbewegung zeigen: wie Atem.
Geschwindigkeit: 6–10 Sekunden für einen vollen Zyklus.

### Was verboten ist

- Das Symbol nie bunt einfärben (kein Regenbogen, kein Chakra-Gradient)
- Nie auf hellem Hintergrund ohne Kontraststufe
- Nie mit anderen Logos oder Elementen in direkter Berührung (mind. 40px Abstand)
- Nie pixelig oder JPG-komprimiert (immer SVG)

### Was das Symbol nicht ist

Kein Unendlichkeits-Symbol (das ist zweidimensional und überall).
Das AEVIMA-Symbol ist Bewegung die sich selbst hält — vier Schleifen, kein Anfang, kein Ende.
Es verknüpft, teilt nicht.

---

## 7. Mobile First

**Alle Entscheidungen werden zuerst für 390px Breite getroffen.**

### Grundregeln Mobile

| Element | Mobile-Wert |
|---|---|
| Schriftgröße Body | 0.9rem (16px base) |
| Headline | `clamp(1.6rem, 5vw, 2.4rem)` |
| Sektions-Padding vertikal | 48–60px |
| Karten-Padding | 20–24px |
| CTA-Button Höhe | mind. 52px (Thumb-freundlich) |
| Max-Width Text-Block | 100% (kein Margin-Verlust) |
| Zeilen-Länge | max. 55–65 Zeichen |

### Was auf Mobile besonders zählt

- Paywall-Karte muss auf einem Bildschirm komplett sichtbar sein
- Zahlen-Badge (LZ-Nummer) muss ohne Zoom lesbar sein
- Scroll-Tiefe: erster Kaufimpuls muss innerhalb 3 Scrolls erreichbar sein
- Kein horizontales Scrollen
- Keine Tabellen die breiter als 390px werden

### Touch-Regeln

- Alle interaktiven Elemente: mind. 44 × 44px Touch-Area
- CTA-Button: Full-width auf Mobile (`width: 100%`)
- Keine Hover-Only-Zustände ohne Touch-Equivalent
- Paywall-Blur-Overlay: muss auf iOS Safari korrekt gerendert werden

### Breakpoints

| Breakpoint | Breite | Verhalten |
|---|---|---|
| Mobile | < 500px | Single Column, volle Breite |
| Tablet | 500–768px | Leicht mehr Padding, optional 2-col |
| Desktop | > 768px | Max-Width aktiv, Sidebars möglich |

---

## 8. Premium-Regeln

**Was AEVIMA visuell von einer typischen Numerologie-Seite unterscheidet:**

### Die 7 visuellen Premium-Entscheidungen

**1. Kein Text auf Bildern.**
AEVIMA trennt Bild und Sprache strikt. Kein Überlagerungs-Text auf Fotos.

**2. Kein Sternenhimmel als Hintergrund.**
Weder Fotos noch Illustrationen von Sternfeldern — das ist der Horoskop-Reflex. Verboten.

**3. Alle Zahlen in Cinzel — nie in normaler Schrift.**
Die Lebenszahl ist kein Datum. Sie ist ein zentrales Element. Sie bekommt ihre eigene Schriftfamilie.

**4. Kein "Jetzt entdecken!" als CTA-Text.**
CTA-Texte bei AEVIMA: ruhig, präzise, kein Druck.
Erlaubt: "Dein Seelenprofil ansehen" | "Vollständige Analyse" | "Entsperren"
Verboten: "Jetzt!, Kostenlos!, Nur für kurze Zeit!, Entdecke dich!"

**5. Maximaler Kontrast zwischen frei und Paywall.**
Der freie Bereich ist sichtbar und schön.
Der Paywall-Bereich ist verhüllt — aber erkennbar wertvoll.
Das Blur-Overlay zeigt: da ist noch mehr. Es schreit nicht danach.

**6. Ein Akzent pro Sektion.**
Jede Sektion hat maximal eine Akzentfarbe dominant.
Nie: Rose Gold + Smaragd + Türkis gleichzeitig auf einer Seite.

**7. Bewegung nur dort, wo sie Bedeutung hat.**
Animation nur für: das Symbol, Ladefortschritt, Paywall-Übergang.
Nie als Dekoration. Nie um die Seite lebendig zu wirken.

### Der Premium-Test

Vor jeder Design-Entscheidung:

> „Würde das auf einer astrologischen Horoskop-Seite erscheinen?“

Wenn ja: eliminieren oder völlig anders gestalten.

> „Würde das auf einer seriösen Psychologie-Plattform funktionieren?“

Wenn ja: behalten.

---

## 7b. Tone-of-Voice im Design

**Jedes Design-Element kommuniziert Haltung.**

| Element | Botschaft |
|---|---|
| Großzügiger Weißraum | "Hier musst du nichts überfliegen." |
| Gedimmte Farben | "Wir schreien nicht um Aufmerksamkeit." |
| Cinzel für Zahlen | "Diese Zahlen haben Gewicht." |
| Raleway light für Analysen | "Lies langsam. Es ist für dich." |
| Smaragd für CTAs | "Das nächste ist wertvoll — nicht dringend." |
| Türkis für Trennelemente | "Hier beginnt etwas anderes." |

---

## 8. Zusammenfassung — Was AEVIMA nie aussieht

❌ Lila mit goldenen Sternen
❌ Gradient von Pink zu Lila
❌ Weiß mit bunten Chakra-Icons
❌ Kursive Gothic-Fonts
❌ Dashboard-Aesthetik mit Statistiken und Balken
❌ Helle Beige-Wellness-App
❌ Dark Mode mit aggressivem Neon-Akzent

---

## 9. Zusammenfassung — Was AEVIMA immer aussieht

✅ Tief-Schwarz als Basis
✅ Ein Akzent in Smaragd oder Türkis pro Sektion
✅ Rose Gold für menschliche Wärme (sparsam)
✅ Cinzel für Titel, Raleway für Text
✅ Viel Raum — mehr als nötig
✅ Kein Bild ohne Bedeutung
✅ Kein Element ohne Funktion

---

*AEVIMA DESIGN SYSTEM V1 — 2026-06-03*
*Verbindlich für alle UI-Entscheidungen, Landingpages, Komponenten und Marketing-Materialien.*
