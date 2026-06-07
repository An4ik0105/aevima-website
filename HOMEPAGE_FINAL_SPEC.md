# AEVIMA – HOMEPAGE FINAL SPEC

> **ARCHITECT MODE AKTIV**
> NICHT BAUEN. NICHT PUSHEN. NICHT DEPLOYEN.
> Diese Datei ist ausschließlich für Spezifikation und Dokumentation.
> Umsetzung erst nach vollständigem Audit aller drei Screens und expliziter Freigabe.

---

## PROJEKTSTATUS

| Screen | Status |
|--------|--------|
| Screen 1 – Hero | ✅ DOKUMENTIERT |
| Screen 2 – Warum AEVIMA? | ✅ DOKUMENTIERT |
| Screen 3 – Fünf Wege zu dir selbst | ✅ DOKUMENTIERT |

**Nächste Schritte nach Screen 3:**
1. Gesamtaudit durchführen
2. Referenzbilder mit Spezifikation vergleichen
3. Alle Abweichungen auflisten
4. Freigabe einholen
5. Erst dann: Umsetzung + Push

---

## REFERENZDATEIEN

### Screen 1

| Datei | Inhalt | Verbindlichkeit |
|-------|--------|-----------------|
| **Bild 1** | Gesamtvorlage Screen 1 | Verbindliche Vorlage – keine Interpretation |
| **Bild 2** | Hintergrundbild Screen 1 | Verbindliche Vorlage – exakt verwenden |
| **Bild 3** | AEVIMA Originallogo | Verbindliche Vorlage – Original verwenden |

**Gespeicherte Pfade:**
- Bild 1 (Vorlage Screen 1): `/root/.openclaw/media/inbound/file_57---c5906ace-ec5e-4df7-bad4-1fd5dd683fa0.jpg`
- Bild 2 (Hintergrund Screen 1): `/root/.openclaw/media/inbound/file_58---0c92a016-cbec-45d3-8576-3c82b45a6899.jpg`
- Bild 3 (Logo): `/root/.openclaw/media/inbound/file_59---515ea146-7dc7-4d7f-9f13-bb6b0cce38c8.jpg`

### Screen 2

| Datei | Inhalt | Verbindlichkeit |
|-------|--------|-----------------|
| **Bild 1** | Gesamtvorlage Screen 2 | Verbindliche Vorlage – keine Interpretation |
| **Bild 2** | Hintergrundbild Screen 2 | Verbindliche Vorlage – exakt verwenden |

**Gespeicherte Pfade:**
- Bild 1 (Vorlage Screen 2): `/root/.openclaw/media/inbound/file_60---40239639-0455-4fdc-b575-2ab16c829e72.jpg`
- Bild 2 (Hintergrund Screen 2): `/root/.openclaw/media/inbound/file_61---2df9f288-f25d-4b4d-9a9f-c3dee9a70716.jpg`

> Keine Inspiration. Keine kreative Freiheit. Keine Modernisierung. Keine Vereinfachung.

---

## VERBINDLICHE DESIGN-TOKENS

> Diese Werte gelten projektübergreifend für alle Screens. Keine Abweichungen.

### TYPOGRAFIE

| Verwendung | Schriftart |
|------------|-----------|
| Headlines (H1, H2, Überschriften) | **Cinzel** (Google Fonts) |
| Fließtext, Untertitel, Navigation | **Raleway** (Google Fonts) |

- Keine alternativen Schriftarten verwenden
- Keine Ersatzschriften ohne explizite Freigabe

### FARBEN

| Token | Hex-Code | Verwendung |
|-------|----------|-----------|
| Basis-Hintergrund |  | Hintergrundfarbe aller Screens (Fallback / Solid) |
| CTA-Farbe |  | CTA-Buttons, Akzente |
| Türkis | Aus Referenzlogo abgeleitet | Logo-Schriftzug, Akzente — exakt aus Bild 3 |
| Rose Gold | Aus Referenzlogo abgeleitet | Überschriften, Hervorhebungen, Trennelemente — exakt aus Bild 3 |

> **REGEL:** Keine neuen Gold-, Türkis- oder Rose-Gold-Töne definieren.
> Türkis und Rose Gold müssen pixelgenau aus dem Referenzlogo (Bild 3) abgeleitet werden.
> Keine Eigeninterpretation der Farbtöne.


---

## SCREEN 1 – HERO

### ZIEL

Screen 1 soll optisch möglichst identisch zur Referenz aus Bild 1 wirken.

Der Besucher soll beim Öffnen der Seite sofort das Gefühl haben:
**Ruhe. Tiefe. Hochwertigkeit. Orientierung.**

Das AEVIMA-Logo ist der visuelle Mittelpunkt.

---

### HINTERGRUND

**Referenz:** Screen-1-Bild-2 – kosmische Meereslandschaft

**Exakte Beschreibung:**
- Tiefes Navy/Schwarz als dominante Hintergrundfarbe
- Rechte Seite: Großer, geschwungener Bogen aus goldenen/orange-goldenen Sternen (Galaxienbogen / kosmischer Wasserfall)
- Linke Seite: Kleinerer, kühlerer Sternhaufen in Blau-Weiß
- Horizont-Mitte: Kleine, intensive warme Lichtquelle direkt auf der Wasserlinie
- Untere Zone: Stilles, dunkles Wasser mit subtilen goldenen Reflexionen der Lichtquelle
- Stimmung: Tiefe Stille, Spiritualität, kosmische Weite

**Anforderungen:**
- Exakt das Referenzbild verwenden
- Keine anderen Bilder
- Keine alternativen Hintergründe
- Keine neuen Galaxien oder Illustrationen
- Keine KI-Neugenerierung
- Keine Farbänderungen
- Lichtstimmung und Farbwirkung müssen erhalten bleiben
- Als `background-image` mit `background-size: cover` und `background-position: center`

---

### HEADER

**Position:** Ganz oben, über dem gesamten Screen, transparent/semi-transparent über dem Hintergrundbild

**Layout:** Horizontale Leiste, links Logo, rechts Navigation

#### LINKS – Logo (Header-Version)
- Originallogo aus Bild 3 verwenden
- Klein, Header-tauglich (ca. 40–50px Höhe)
- Besteht aus: Symbol (Lemniskat-Quatrefoil Rose Gold) + Schriftzug „aevima" in Türkis-Serif
- Originaldatei verwenden – nicht ersetzen, nicht nachzeichnen, nicht neu gestalten

#### RECHTS – Navigation (Desktop)
- Menüpunkte (von links nach rechts):
  1. **Über AEVIMA**
  2. **Produkte**
  3. **Kontakt**
  4. **Sprachbutton** mit Globus-Symbol
- Schriftfarbe: Hell (Weiß oder Creme) passend zum dunklen Hintergrund
- Stil: Elegant, dünn, viel Luft zwischen den Punkten
- Kein Hamburger-Menü auf Desktop — alle Punkte voll sichtbar

#### NAVIGATION MOBILE (verbindlich)
- **Links:** Logo sichtbar (Symbol + Schriftzug aevima)
- **Rechts:** Hamburger-Menü — öffnet die Navigation als Dropdown oder Overlay
- **Inhalt im Hamburger:** Über AEVIMA / Produkte / Kontakt / Sprachbutton
- Keine andere Mobile-Navigation verwenden

#### VERLINKUNGEN (vorbereiten, NICHT umsetzen)
| Element | Ziel |
|---------|------|
| Über AEVIMA | → Screen 2 (Sprung) |
| Produkte | → Screen 3 (Sprung) |
| Kontakt | → Kontaktseite (zukünftig) |
| Sprachbutton | → Mehrsprachigkeit (zukünftig) |

---

### HERO-BEREICH (Mitte)

**Layout:** Vertikal zentriert auf dem Screen, alle Elemente horizontal zentriert

#### 1. LOGO – Großes Zentriertes Symbol

**Position:** Visueller Mittelpunkt – oberhalb der Headline, mittig im Screen

**Referenz:** Bild 3 (Originallogo in voller Größe)

**Beschreibung des Logos (Bild 3):**
- **Symbol:** Vierblätriges Quatrefoil aus zwei verschränkten Infinity-Schleifen (Lemniskat-Knoten)
  - Eine horizontale + eine vertikale Schleife durch gemeinsamen Mittelpunkt
  - Erscheinungsbild: Stilisierter 4-Blatt-Klee / Kompassrose aus kontinuierlichem Band
  - Farbe: Poliertes Rose-Gold / Kupfer mit metallischem 3D-Shading (Glanzlichter, Schatten)
  - Wirkung: Dreidimensional, skulptural, premium
  - Diagonal-Akzente: Kurze Türkis/Smaragdgrün-Striche hinter dem Zentrum
- **Schmuckelemente:**
  - Kleine 4-Punkt-Sterne (Sparkles) in Rose Gold und Türkis:
    - Über dem Symbol: vertikale Punkte-Reihe → kleiner Stern
    - Links und rechts auf Mittellinie: Punkt-Punkt-Stern-Punkt-Punkt-Muster
    - Unter dem Schriftzug: flankierend neben einem dünnen Trennstrich
  - Dünne horizontale Rose-Gold-Linie unter dem Schriftzug (eleganter Unterstrich)
- **Schriftzug:** „aevima"
  - Alle Kleinbuchstaben
  - Klassische Serif-Schrift, dünne Striche, subtile Serifen-Flares
  - Farbe: Türkis/Smaragdgrün mit sanftem Glow
  - Großzügiges Letter-Spacing (Luftig, Luxus-Feeling)
- **Hintergrund des Original-Logos:** Schwarz (für Website: transparente PNG verwenden)

**PNG-Anforderung für Implementierung:**
- Originallogo als Basis
- Nur Hintergrund entfernen
- Keine Neuzeichnung
- Keine KI-Neugenerierung
- Keine Qualitätsverluste / keine Verpixelung
- Saubere Kanten
- Hohe Auflösung
- Premium-Webqualität
- Webtaugliche PNG

**Größe:** Logo größer als alle Textelemente – dominanter visueller Mittelpunkt

---

#### 2. HEADLINE

**Position:** Direkt unter dem großen Logo

**Text:**
> Kein Zufall. Dein Weg.

**Stil:**
- Groß, elegant, ruhig, hochwertig
- Schriftfarbe: Hell (Weiß/Creme)
- Serif oder elegante Sans-Serif passend zum Logo
- Viel Luft zum Logo oben, viel Luft zur Subline unten

---

#### 3. SUBLINE

**Position:** Direkt unter der Headline

**Text:**
> Muster erkennen. Entwicklung verstehen. Klarer werden.

**Stil:**
- Farbe: Türkis/Gold (warmgoldener Ton)
- Kleiner als die Headline
- Gut lesbar, ruhig, nicht dominant
- Elegante Schrift, leichte Schriftstärke

---

#### 4. CTA-BUTTON

**Position:** Unter der Subline, zentriert

**Text:**
> Jetzt entdecken

**Stil:**
- Outlined Button (dunkler Hintergrund, heller Rand/Text)
- Abgerundete Ecken
- Elegant, nicht aufdringlich
- Schriftfarbe: Hell
- Border: Rose Gold oder Weiß/Creme

**Funktion (NICHT umsetzen – nur dokumentieren):**
- Sprung zu Screen 3 (Produkte)

**Scroll-Indikator:**
- Unter dem Button: Kleiner Pfeil nach unten (↓) in Rose Gold / Creme
- Subtil animiert (sanftes Auf-Ab, später implementieren)

---

### DESIGN-REGELN SCREEN 1

#### Farben
| Element | Farbe |
|---------|-------|
| Hintergrund | Tief Dunkelblau/Schwarz (Referenzbild) |
| Logo Symbol | Rose Gold / Kupfer Metallic |
| Logo Schriftzug | Türkis / Smaragdgrün |
| Navigation | Hell (Weiß/Creme) |
| Headline | Hell (Weiß/Creme) |
| Subline | Warm-Gold / Türkis |
| CTA-Button | Outlined, Creme/Rose Gold |
| Scroll-Pfeil | Rose Gold / Creme |

#### Typografie
- Hochwertig, ruhig
- Viel Weißraum, viel Luft
- Kein überladenes Layout
- Logo größer als alle Textelemente

#### Layout
- Alles horizontal zentriert
- Vertikale Reihenfolge: Header → Logo (groß) → Headline → Subline → CTA → Scroll-Pfeil
- Vollbild (100vw × 100vh)
- Hintergrundbild als `cover`

---

### VERBOTEN FÜR SCREEN 1

- ❌ Kein Formular
- ❌ Keine Produktkarten
- ❌ Keine Timeline
- ❌ Keine Reise-Sektion
- ❌ Kein „Das System"
- ❌ Keine neuen Texte (außer den definierten)
- ❌ Keine neuen Farben
- ❌ Keine alternativen Logos
- ❌ Keine Designverbesserungen
- ❌ Keine kreativen Anpassungen
- ❌ Keine Interpretation
- ❌ Kein anderes Hintergrundbild
- ❌ Kein anderes Logo

---

### KONTAKTSEITE (Dokumentation für später)

**Aktuell:** NICHT bauen.

**Spätere Funktion:**
- Besucher können Feedback senden
- Besucher können Kontakt aufnehmen
- Nachricht wird an hinterlegte AEVIMA-E-Mail-Adresse gesendet

**Umsetzung:** Erst nach Abschluss und Freigabe von Screen 1, 2 und 3.

---

## SCREEN 2 – WARUM AEVIMA?

### ZIEL

Screen 2 schließt organisch an Screen 1 an.

Der Besucher soll tiefer in die AEVIMA-Philosophie eintauchen:
**Identität. Seele. Tiefe. Vertrauen.**

Keine Unterbrechung des Flows. Gleiche Atmosphäre. Gleiche Premiumwirkung.

---

### HINTERGRUND

**Referenz:** Screen-2-Bild-2 – mystische Berglandschaft mit kosmischem Kreismuster

**Exakte Beschreibung:**
- Tiefes Navy/Schwarz als dominante Hintergrundfarbe
- Links (ca. 40% der Breite): Mystische Illustration – großes konzentrisches Kreismuster (Sacred Geometry / Himmelsatlas) aus leuchtend goldenen Punkten mit kreuzenden Achsenlinien (vertikal + horizontal)
- Im Zentrum des Kreismusters: Helle goldene Lichtquelle / Stern
- Untere Zone links: Silhouettierte dunkle Bergketten am Horizont
- Gewundener goldener Lichtpfad / Fluss schlängelt sich vom leuchtenden Horizont durch das Tal in den Vordergrund
- Kleines Sternenmuster im dunklen Himmel
- Rechts (ca. 60% der Breite): Reines Dunkelblau/Schwarz – Textbereich
- Stimmung: Kosmisch, spirituell, Reise, Transformation, heilige Geometrie

**Anforderungen:**
- Exakt das Referenzbild verwenden
- Das Bild darf NICHT verändert werden:
  - Kein Zuschneiden
  - Kein Weichzeichnen
  - Kein Nachschärfen
  - Keine neuen Elemente hinzufügen
  - Keine neuen Symbole hinzufügen
  - Keine Farbfilter
- Originalauflösung verwenden
- Responsive nur über sauberes Scaling

---

### LAYOUT

**Desktop:**
- Zweigeteilte horizontale Komposition
- Links: **ca. 55% Breite** → Hintergrundbild sichtbar und wirkend
- Rechts: **ca. 45% Breite** → Textblock auf dunklem Bildbereich
- Keine Überlagerung
- Keine abgeschnittenen Textbereiche

**Mobile:**
- Bild oben (vollständig sichtbar)
- Text darunter (volle Breite)
- Kein Überlapp
- Kein abgeschnittener Inhalt

---

### ÜBERSCHRIFT

**Text:**
> Warum AEVIMA?

**Position:** Zentriert über dem Textblock (rechts)

**Stil:**
- Farbe: **Rose Gold**
- Schrift: Identisch zu Screen 1 – gleiche Typografie-Familie, gleiche Markenoptik
- Elegante Klassik, keine Fettheit

**Trennelement unter der Überschrift:**
- Kleines, dezentes AEVIMA-Trennelement
- Farbe: Rose Gold
- Nicht dominant
- Stil: Analog zu Logo-Unterstrich (dünne Linie + kleine Schmuckpunkte)

---

### FLIESSTEXT

> **TEXT EXAKT ÜBERNEHMEN – KEIN WORT ÄNDERN, ERSETZEN, KÜRZEN ODER ERWEITERN**

---

Über Kulturen, Religionen und Zeiten hinweg begegnet uns immer wieder derselbe Gedanke:

Der Mensch ist mehr als sein Körper.
Mehr als seine Gedanken.
Mehr als die Rollen, die er im Leben übernimmt.

Die Vorstellung darüber, dass es etwas in uns gibt, das tiefer reicht.
Etwas, das bleibt, auch wenn sich das Leben verändert, begleitet die Menschheit bereits seit Jahrtausenden.

**Die Seele erinnert uns daran, wer wir wirklich sind.** ← HERVORHEBUNG

AEVIMA möchte dir nicht sagen, was du glauben sollst.

AEVIMA versteht die Seele als Einladung, nach innen zu schauen.
Als Erinnerung daran, dass du mehr bist als deine Gewohnheiten.
Mehr als deine Ängste.
Mehr als die Muster, die sich in deinem Leben wiederholen.

Deshalb interessiert sich AEVIMA nicht nur für die Frage, was du tust.

Sondern für die Frage:

**Was wird sichtbar, wenn die Muster leiser werden?** ← HERVORHEBUNG

**Und wer bist du darunter?** ← HERVORHEBUNG

---

### HERVORHEBUNGEN

Exakt diese drei Textstellen hervorheben:

| # | Textstelle |
|---|-----------|
| 1 | „Die Seele erinnert uns daran, wer wir wirklich sind." |
| 2 | „Was wird sichtbar, wenn die Muster leiser werden?" |
| 3 | „Und wer bist du darunter?" |

**Hervorhebungs-Stil:**
- Farbe: **Rose Gold**
- Gewicht: deutlich stärker (bold oder semi-bold)
- Sofort sichtbar, aber elegant
- Nicht plakativ
- Kein Underline, keine Boxen, keine Rahmen

---

### TYPOGRAFIE

**Priorität:** Lesbarkeit

**Desktop:**
- Großzügige Zeilenabstände
- Ruhige Absätze
- Keine Textwand

**Mobile:**
- Schrift größer als bisherige AEVIMA-Version
- Leicht lesbar
- Kein Zoomen erforderlich
- Kein Scrollen durch Minischrift

**Textbreite:**
- Maximal optimieren für Lesbarkeit
- Nicht volle Container-Breite – etwas Padding links und rechts

---

### DESIGN-REGELN SCREEN 2

**Nahtloser Übergang von Screen 1:**

| Merkmal | Anforderung |
|---------|-------------|
| Farben | Identisch zu Screen 1 |
| Schriftarten | Identisch zu Screen 1 |
| Atmosphäre | Identisch – dunkel, premium, spirituell |
| Abstände | Großzügig, konsistent |
| Premium-Wirkung | Erhalten |

**Verboten:**
- ❌ Keine neuen Designelemente erfinden
- ❌ Keine anderen Farbtöne
- ❌ Keine hellen Hintergründe
- ❌ Keine Karten
- ❌ Keine Boxen
- ❌ Keine Rahmen
- ❌ Kein abweichendes Bildmaterial
- ❌ Keine Textänderungen

---

### FARBEN SCREEN 2

| Element | Farbe |
|---------|-------|
| Hintergrund | Tief Dunkelblau/Schwarz (Referenzbild) |
| Überschrift | Rose Gold |
| Trennelement | Rose Gold |
| Fließtext | Hell (Weiß/Creme) |
| Hervorhebungen | Rose Gold, stärker gewichtet |

---

*Zuletzt aktualisiert: 2026-06-06 | Screen 1 + Screen 2 + Screen 3 vollständig dokumentiert*
*ARCHITECT MODE aktiv – Keine Implementierung erfolgt*

---

## SCREEN 3 – FÜNF WEGE ZU DIR SELBST

### ZIEL

Screen 3 präsentiert die 5 AEVIMA-Produkte als vertikale Karten-Reihe.
Der Besucher soll sofort verstehen, was AEVIMA anbietet — ohne zu suchen.

**Stimmung:** Struktur. Klarheit. Tiefe. Kontinuität zu Screen 1 & 2.

---

### SEKTION-ÜBERSCHRIFT (verbindlich)

**Position:** Oberhalb der fünf Produktkarten, zentriert

| Element | Inhalt | Typografie |
|---------|--------|-----------|
| Titel | Fünf Wege zu dir selbst | Cinzel |
| Untertitel | Erkenntnis. Orientierung. Entwicklung. | Raleway |

- Optik passend zu Screen 1 und Screen 2 — gleiche Abstände, gleiche Stimmung
- Farben: Rose Gold für Titel, Creme/Hell für Untertitel

---

### LAYOUT

- **Karten-Anordnung:** Vertikal untereinander (keine Rasteransicht, keine Horizontalreihe)
- **Symbol-Position:** Links neben der jeweiligen Karte
- **Design-Stil:** Identisch zum bestehenden AEVIMA-Stil
  - Gleiche Farben wie Screen 1 & 2
  - Gleiche Schriftarten
  - Gleiche Abstände, Schatten, Premium-Wirkung
- **Symbole:** PNG-Originaldateien verwenden, nicht verpixeln, hohe Qualität

---

### REFERENZDATEIEN SYMBOLE

| Karte | Symbol-Datei |
|-------|-------------|
| Karte 1 – Seelenprofil | `/root/.openclaw/media/inbound/file_62---1a7c4c19-02f3-4ca1-b229-f6d220b1410f.jpg` |
| Karte 2 – Beziehungsanalyse | `/root/.openclaw/media/inbound/file_63---14cb1a9b-f874-41ca-86c6-8ca59e4c2d25.jpg` |
| Karte 3 – Kosmischer Kalender | `/root/.openclaw/media/inbound/file_64---4e79a1b5-4708-4d11-92b5-930f1d8e85d7.jpg` |
| Karte 4 – Astrocartography | `/root/.openclaw/media/inbound/file_65---d9d950fc-b997-47d3-be64-59b12d7ee884.jpg` |
| Karte 5 – Traumtagebuch & Deutung | `/root/.openclaw/media/inbound/file_66---f9ba67ee-72f3-46e6-b11d-969b36817dea.jpg` |

---

### KARTE 1 – SEELENPROFIL

**Status:** `VERFÜGBAR`

**Symbol-Beschreibung:**
- Ornamentale Kompassrose in metallischem Gold, schwarzer Hintergrund
- Äußerer goldener Ring mit 8-zackigem Stern/Kompassrose-Motiv
- 4 Hauptpunkte (N/S/E/W): länger, dimensional, facettiert, Gold mit Licht-Schatten-Shading
- 4 Zwischenpunkte (NE/SE/SW/NW): kürzer, feiner
- Goldene Kugeln/Perlen an den 4 Hauptpunkten wo Stern auf Ring trifft
- 4 kleine 4-Punkt-Sparkle-Sterne außen an den Kardinalrichtungen
- Verbunden mit zentraler Kompassrose durch Linie aus goldenen Punkten
- Kleine Türkis/Cyan Blatt-/Feder-Akzente innerhalb des Kreises
- Stil: Elegant, nautisch, fantasy-inspiriert, luxuriös, magisch

**Titel:** Wer bist du wirklich?

**Untertitel:** Dein Seelenprofil · Lebenszahl · Herzwunsch · Muster

**Text (EXAKT – KEIN WORT ÄNDERN):**
> Deine Lebenszahl, dein Herzwunsch, deine Beziehungsmuster und dein Geldmuster.
>
> Das Profil zeigt nicht, wer du sein solltest.
>
> Es macht sichtbar, wer du im Kern möglicherweise schon immer warst.

**Button:** Jetzt entdecken

---

### KARTE 2 – BEZIEHUNGSANALYSE

**Status:** `COMING SOON`

**Symbol-Beschreibung:**
- Zwei verschränkte Ringe horizontal angeordnet (Venn-Diagramm-ähnlich)
- Linker Ring: Poliertes metallisches Gold, glänzend, 3D-Optik mit Highlights und Schatten
- Rechter Ring: Weiches metallisches Türkis/Hellgrün, ebenfalls glänzend 3D
- Ringe kreuzen sich in der Mitte — gewebter/verschlungener Effekt, vorder-/hinterschichtig
- Im Überlappungsbereich: Kleines 3D-Gold-Herz, klassisch symmetrisch, hochglänzend
- 4 goldene 4-Punkt-Sparkle-Sterne außen (oben, unten, links, rechts)
- Jeder Sparkle mit kleinen Punkten die nach außen abklingen (Glitzereffekt)
- Stil: Poliert, luxuriös, romantisch — Liebe, Einheit, Partnerschaft

**Titel:** Warum begegnen sich manche Menschen?

**Untertitel:** Beziehungsanalyse · Anziehung · Konflikt · Spiegel · Entwicklung · Bedeutung der Begegnung

**Text (EXAKT – KEIN WORT ÄNDERN):**
> Manche Menschen begleiten uns.
>
> Andere verändern uns.
>
> Und manche zeigen uns Seiten von uns, die wir allein nie erkannt hätten.
>
> Diese Analyse beschäftigt sich nicht nur mit der Frage, ob zwei Menschen zusammenpassen.
>
> Sondern auch mit der Frage, warum sie sich begegnet sein könnten.

**Button:** Frühzugang sichern

---

### KARTE 3 – KOSMISCHER KALENDER

**Status:** `COMING SOON`

**Symbol-Beschreibung:**
- Kreisförmiges Kompassrosen-/Astrolabium-Symbol in leuchtendem Gold, schwarzer Hintergrund
- Zentrales goldenes Kugelorb/Sphäre in der Mitte, wie Sonne oder Planet
- 8 gerade goldene Speichen strahlen von der Zentralkugel aus (N/S/E/W + Diagonalen)
- 3 konzentrische goldene Ringe (innen nah, Mitte, außen als Doppellinie)
- Goldene Punkte/Perlen an den Kreuzungspunkten von Speichen und Ringen (wie Sternkarte)
- 4 elongierte 4-Punkt-Sparkle-Sterne an Kardinalrichtungen außerhalb des äußeren Rings
- Kleine Punkte strahlen von diesen Sparkles nach außen ab
- Kleine blasse Türkis/Cyan Dreieck-Markierungen an den 4 Diagonalpositionen des äußeren Rings
- Stil: Mystisch, esoterisch, kosmisch — alchemistische Diagramme, Astronomie, Fantasy

**Titel:** Warum fühlt sich manches leicht an – und anderes nicht?

**Untertitel:** Kosmischer Kalender · Zeitqualität · Orientierung

**Text (EXAKT – KEIN WORT ÄNDERN):**
> Es gibt Zeiten, in denen sich Türen öffnen.
>
> Und Zeiten, in denen alles mehr Kraft kostet.
>
> Der Kosmische Kalender hilft dir zu verstehen, welche Qualität eine Zeit gerade trägt.

**Button:** Frühzugang sichern

---

### KARTE 4 – ASTROCARTOGRAPHY

**Status:** `COMING SOON`

**Symbol-Beschreibung:**
- Zentriertes, ornamentales kosmisch-astronomisches Symbol in goldgelbem Ton, schwarzer Hintergrund
- Zentraler Bereich: 3D-Sphären-Drahtgitter-Struktur (Armillarsphäre)
- Mehrere goldene Meridianlinien (Längengrade) bilden die Sphärenform
- Horizontale Äquatorbänder umlaufen die Mitte
- Innen 8 Speichen aus zentraler goldener Kugel (Kompassrosen-Muster in der Sphäre)
- Zentralkern: Leuchtende goldene Kugel
- Kardinalstellen: Oben + unten 4-Punkt-Sparkle-Sterne, je mit kleinem Punkt dahinter
- Diagonal: 4 kleine blasse Grün/Mint Pfeil- oder Kristall-Markierungen
- Horizontal: Gepunktete Linie erstreckt sich links und rechts aus der Sphäre
- Kleine goldene Punkte und winzige Sparkles auf dieser Linie (Äquatorialebene / Orbitbahn)
- Stil: Sanfter Glow, ethereal, luminös — Fantasy, Astrologie, Alchemie

**Titel:** Warum verändern manche Orte dein Leben?

**Untertitel:** Astrocartography · Orte · Potenziale · Entwicklung

**Text (EXAKT – KEIN WORT ÄNDERN):**
> Manche Orte geben dir Energie.
>
> Andere stellen dich vor Herausforderungen.
>
> Diese Analyse zeigt, welche Qualitäten bestimmte Orte in deinem Leben aktivieren können.

**Button:** Frühzugang sichern

---

### KARTE 5 – TRAUMTAGEBUCH & DEUTUNG

**Status:** `COMING SOON`

**Symbol-Beschreibung:**
- Celestiales Dekorationssymbol in metallischem Gold, tiefes Dunkelblau/Schwarz Hintergrund
- Zentrales Element: Große Mondsichel aus zwei geschwungenen Goldlinien
  - Äußere Kurve schwingt von oben nach unten
  - Innere Kurve erzeugt die konkave Seite der Mondsichel
  - Beide Linien treffen sich in spitzen Punkten oben und unten
  - Unterer Punkt: Elongierter, sich verjüngender Schweif der elegant nach rechts schwingt
  - Poliertes metallisches Gold mit Gradientschattierung (Dimensionswirkung)
- Rechts der Mondöffnung: 4 vier-Punkt-Sparkle-Sterne verschiedener Größe
  - 1 größerer Sparkle oben rechts
  - 1 mittlerer Sparkle Mitte rechts
  - 1 kleinerer Sparkle unten rechts
  - 1 weiterer kleiner Sparkle weiter rechts
- 2 kleine goldene Punkte/Kugeln innerhalb der Mondöffnung (oben + unten)
- Dekorative Akzente: Links und rechts außen je ein kleiner 4-Punkt-Stern mit Spur aus winzigen abnehmenden Punkten (symmetrisches Rahmenelement)
- Stil: Mystisch, kosmisch, luxuriös — Tarot-Karten-Ästhetik, Astrologie, Boho-Spiritual

**Titel:** Was wollen deine Träume dir zeigen?

**Untertitel:** Traumtagebuch · Traumdeutung · Muster erkennen

**Text (EXAKT – KEIN WORT ÄNDERN):**
> Manche Träume verschwinden.
>
> Andere kehren immer wieder zurück.
>
> Sie erzählen oft von Themen, die im Alltag leicht übersehen werden.

**Button:** Frühzugang sichern

---

### DESIGN-REGELN SCREEN 3

| Merkmal | Anforderung |
|---------|-------------|
| Kartenstil | AEVIMA-Stil konsistent zu Screen 1 & 2 |
| Farben | Identisch (Dunkel, Rose Gold, Türkis, Creme) |
| Schriftarten | Identisch zu Screen 1 & 2 |
| Abstände | Großzügig, konsistent |
| Schatten | Dezent, premium |
| Rahmen | Subtil, passend zur Marke |
| Symbol-Qualität | Nicht verpixelt, hohe Auflösung, scharfe Kanten |
| Symbol-Position | Links neben der Karte |
| Karten-Anordnung | Vertikal untereinander |

### STATUS-BADGE REGELN

| Status | Darstellung |
|--------|-------------|
| VERFUEGBAR | Aktiver CTA "Jetzt entdecken", Badge sichtbar und aktiv |
| COMING SOON | Badge dezent, CTA "Fruehzugang sichern", kein aktiver Link |

### AUDIT-CHECKLISTE (nach Freigabe aller Screens)

Der Audit muss pruefen:

- [ ] Designtreue zu den Referenzbildern
- [ ] Logo-Positionierung
- [ ] Typografie Desktop
- [ ] Typografie Mobile
- [ ] Bildqualitaet
- [ ] Responsive Darstellung
- [ ] Abstaende
- [ ] CTA-Buttons
- [ ] Navigation
- [ ] Scrollverhalten

Erst nach bestandenem Audit: Umsetzung + Push auf GitHub.

---

*Zuletzt aktualisiert: 2026-06-06 | Alle drei Screens vollstaendig dokumentiert. Bereit fuer Gesamt-Audit.*
*ARCHITECT MODE aktiv - Keine Implementierung erfolgt*

---

## ENTSCHEIDUNGSLOG – FINALE KLÄRUNGEN

### Footer
**Entscheidung:** BEHALTEN
- Nicht entfernen
- Zukünftige Verwendung: Impressum / Datenschutz / Kontakt / Copyright / rechtliche Inhalte
- Keine Änderung am Footer bei der Implementierung

### Closing-Section
**Entscheidung:** BEHALTEN
- Technisch erhalten, Inhalte können später ersetzt werden
- Aktuelle Closing-Message ("Du hast nichts Neues bekommen...") gilt NICHT mehr als finale Version
- Finale Closing-Message wird nach Testergebnissen festgelegt
- Bei Implementierung: Section strukturell erhalten, Platzhalter-Text einfügen

---

## GESAMTSTATUS

| Phase | Status |
|-------|--------|
| Architect Mode – Spezifikation | ✅ ABGESCHLOSSEN |
| Audit Phase A – Spezifikationsprüfung | ✅ BESTANDEN |
| Audit Phase B – Technische Planung | ✅ ABGESCHLOSSEN |
| Implementierungsaudit | ✅ BESTANDEN |
| Offene Punkte | ✅ KEINE |

> **FREIGABE ERTEILT — BEREIT FÜR IMPLEMENTIERUNG.**
> Implementierung startet erst auf explizites Kommando.
