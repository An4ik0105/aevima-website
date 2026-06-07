# AEVIMA — UI MOCKUP SYSTEM
**Version:** 1.0 | 2026-06-03
**Zweck:** Definition aller Screen-Mockups — Spezifikation für Designer und Entwickler
**Grundlage:** BRAND_GUIDELINES.md | PROFILE_UI_SYSTEM.md | LANDINGPAGE_ARCHITECTURE.md | CHECKOUT_SYSTEM.md

---

## ÜBERSICHT — ALLE SCREENS

| Screen | Priorität | Mobile | Desktop |
|---|---|---|---|
| LP-01 Landingpage | 🔴 Kritisch | Ja | Ja |
| PR-01 Formular (Eingabe) | 🔴 Kritisch | Ja | Ja |
| PR-02 Profil — Freier Teaser | 🔴 Kritisch | Ja | Ja |
| PR-03 Profil — Paywall-Zustand | 🔴 Kritisch | Ja | Ja |
| PR-04 Profil — Nach Kauf | 🔴 Kritisch | Ja | Ja |
| CH-01 Checkout | 🔴 Kritisch | Ja | Ja |
| CH-02 Kaufbestätigung | 🟡 Hoch | Ja | — |
| EM-01 Bestätigungs-E-Mail | 🟡 Hoch | Ja | — |
| EM-02 Follow-Up-E-Mail | 🟢 Standard | Ja | — |

---

## SCREEN LP-01 — LANDINGPAGE

### Mobile (390px)

**Sektion 1 — Hero:**
```
[AEVIMA Symbol, 48px, Rose Gold, zentriert, margin-top 64px]
[margin-bottom 16px]
[Headline: "Manche Dinge wiederholen sich.
           Nicht zufällig."
 Cinzel, 2rem, Off-White, zentriert]
[margin-bottom 20px]
[Subheadline: Raleway 300, 0.95rem, Gedämpft, zentriert]
[margin-bottom 32px]
[CTA Button: Smaragd, 100%, 52px, Cinzel]
[margin-bottom 12px]
[CTA Subtext: 0.8rem, Gedämpft]
[padding-bottom 64px]
```

**Sektion 2 — Vertrauensaufbau:**
```
[Hintergrund: #18161F]
[Sektions-Titel: Cinzel, 0.65rem, Rose Gold]
[Divider: Türkis, 60px]
[margin-bottom 24px]
[Zwei Listen: Raleway 300, 0.9rem, je 4–5 Punkte]
[margin-bottom 24px]
[Zitat-Block: Türkis-Border, Raleway 300 italic]
```

**Sektion 3 — Core Principle:**
```
[Volle Breite, Nacht-Hintergrund]
[Symbol 40px]
[Frage: Cinzel, 1.6rem, Off-White, zentriert]
[3 Absätze: Raleway 300, 0.9rem, Gedämpft, zentriert]
```

**Sektion 4 — Vier Säulen:**
```
[4 Karten, Einspalte]
Karte 1 (Herzwunsch): Rose Gold Border, Teasersatz italic
Karte 2 (Beziehungsmuster): Türkis Border, Teasersatz italic — etwas größer
Karte 3 (Ausdruckszahl): Türkis Border, Teasersatz italic
Karte 4 (Geldmuster): Smaragd Border, kein Teasersatz — kleiner
[CTA unter Karten]
```

**Sektion 5 — Voice Library:**
```
[Titel: "Erkennst du dich?"]
[5 Zitat-Blöcke, gestapelt, je Türkis-Unterlinie, italic]
[CTA]
```

**Sektion 6 — Prozess:**
```
[3 Schritte, vertikal, Zahlen in Rose Gold Cinzel]
```

**Sektion 7 — Preis:**
```
[Preis: Cinzel, 3rem, Rose Gold, zentriert]
[4 Punkte, Raleway 300]
[CTA: 100%, Smaragd]
[Subtext: Türkis, 0.8rem]
```

**Sektion 8 — FAQ:**
```
[4 Accordion-Elemente, Cinzel-Titel, Raleway-Antwort]
```

**Sektion 9 — Abschluss:**
```
[Symbol 40px]
[Abschlusssatz: Cinzel oder Raleway 300 italic]
[CTA: Smaragd, zentriert]
[60px Weißraum]
[Footer]
```

### Desktop (1200px max-width)

**Abweichungen Desktop:**
- Säulen: 2×2 Grid
- Voice Library: 2–3 nebeneinander (je nach Satzlänge)
- Preis: Links Produktinfos, rechts Preis + CTA
- Checkout: 2-Spalten-Layout

---

## SCREEN PR-01 — EINGABE-FORMULAR

### Zweck
Nutzer gibt Name, Geburtsdatum, Geburtsort ein.

### Mobile Layout

```
[AEVIMA Symbol, 32px]
[Titel: "DEIN SEELENPROFIL", Cinzel, 1.8rem, Rose-Hell]
[Subtitle: Raleway 300, Gedämpft]
[Divider]

[Formular:]
  [Label: "VORNAME", Cinzel, 0.7rem, Rose, uppercase]
  [Input: Full-Width, Dunkel-Hintergrund, Rose-Border bei Focus]
  [Label: "NACHNAME"]
  [Input]
  [Label: "GEBURTSDATUM"]
  [Input type=date]
  [Label: "GEBURTSORT"]
  [Input: Placeholder "Stadt, Land"]
  [Label: "E-MAIL-ADRESSE"]
  [Input type=email]
  [Label: "GEBURTSZEIT (optional)"]
  [Input type=time]

[Checkboxen: Datenschutz + Newsletter]

[Submit Button: "✦ Meine Analyse starten", Smaragd, 100%, 52px]
```

### Zustände

- **Leer:** Labels Rose, Inputs normal
- **Fokus:** Border Türkis 50% Opacity
- **Fehler:** Border Rot, Error-Text Raleway 300 klein
- **Loading:** Button deaktiviert, Spinner (Rose Gold, dezent)

---

## SCREEN PR-02 — PROFIL (TEASER-ZUSTAND, VOR KAUF)

### Zweck
Nutzer sieht kostenlose Vorschau. Paywall ist sichtbar aber nicht aufdringlich.

### Mobile Layout

**Hero:**
```
[Symbol 48px]
[Vorname, Cinzel, Rose-Hell]
[LZ-Badge: 3rem, Cinzel, Rose Gold]
[Archetype-Name: Cinzel, 0.9rem]
[Meisterzahl-Badge wenn zutreffend: Türkis Border]
[Divider: Rose, 60px]
[Teaser-Text: Raleway 300, Gedämpft]
```

**Säule 1 — Herzwunsch (frei):**
```
[Säulen-Titel: ♡ DEIN HERZWUNSCH, Cinzel, Rose]
[Divider: Türkis, 40px]
[Sehnsucht-Text: Raleway 300, 3–4 Sätze, Gedämpft]
[Letzter Satz leicht ausgeblendet — Fade-out]

[PAYWALL BLOCK:]
  [Blur-Overlay: backdrop-filter blur(8px)]
  [Gradient: transparent → Nacht]
  [Paywall-Karte zentriert:]
    [Symbol 32px]
    [Text: "Vollständige Analyse"]
    [Preis: "59 €", Cinzel, 2rem, Rose Gold]
    [Subtext: Raleway 300, Gedämpft]
    [CTA: "✦ Analyse freischalten", Smaragd, 100%]
```

**Säulen 2–4 (vollständig gesperrt):**
```
[Säulen-Titel sichtbar]
[Erste Zeile sichtbar]
[Rest: Blur, keine Paywall-Wiederholung — nur subtiles Lock-Icon]
```

### Desktop Abweichungen
- Profil max-width: 680px, zentriert
- Paywall-Block: 480px breit, zentriert

---

## SCREEN PR-03 — PAYWALL DETAIL-ZUSTAND

### Zweck
Vollständige Paywall-Ansicht wenn Nutzer auf "Entsperren" klickt — ohne Checkout-Seite zu laden.

### Aufbau (Modal oder Inline-Expansion)

Option A (empfohlen): Checkout lädt direkt — kein Modal
Option B: Slide-In Panel von rechts (Mobile: Bottom Sheet)

### Bottom Sheet Mobile

```
[Handle-Bar oben]
[Produkt-Zusammenfassung:]
  "AEVIMA Seelenprofil"
  4 Punkte
  "59 €"
[Zahlungsoptionen:]
  [Apple Pay Button: volle Breite, schwarz]
  [Google Pay Button: volle Breite, weiß auf Dunkel]
  [Oder-Trenner]
  [Kreditkarte: Stripe Element]
[Kaufbutton: "✦ Mein Profil freischalten"]
[Legal-Text]
```

---

## SCREEN PR-04 — PROFIL (NACH KAUF)

### Zweck
Vollständig freigeschaltetes Profil. Kein Blur. Kein Paywall.

### Unterschied zu PR-02

- Paywall-Blöcke sind weg
- Alle 4 Säulen vollständig sichtbar
- "Was möglich wird" sichtbar
- Einladungs-Sätze sichtbar
- Am Ende: Weiter-CTAs (Synastrie, Kosmischer Kalender)
- Am Ende: Abschlusstext + Symbol

### Visuelles Merkmal nach Kauf

Diskrete Smaragd-Badge im Hero: "✦ VOLLSTÄNDIG"
[Cinzel, 0.65rem, Smaragd, Border, padding 0.2rem 0.6rem]

---

## SCREEN CH-01 — CHECKOUT

### Mobile Layout (390px)

```
[Header: Symbol 32px + "aevima.com"]
[Divider]

[Produkt-Zusammenfassung:]
  "AEVIMA Seelenprofil"
  ✦ Herzwunsch
  ✦ Beziehungsmuster
  ✦ Ausdruckszahl
  ✦ Geldmuster
  [Divider]
  "59 €  ·  Einmalig"

[Divider]

[Zahlungsbereich:]
  [Apple Pay Button, 100%]
  [Google Pay Button, 100%]
  [Trennlinie: "— oder mit Karte —"]
  [Stripe Payment Element]

[Kaufbutton: "✦ Mein Profil freischalten", 100%, 56px]
[Legal-Text, 0.75rem]
[SSL-Badge, minimal]
```

### Was fehlt (bewusst)

- Keine Navigation
- Kein Back-Button (Nutzer kann Browser-Zurück nutzen)
- Keine anderen Links
- Keine Produktbilder
- Kein Countdown

---

## SCREEN CH-02 — KAUFBESTÄTIGUNG

### Mobile Layout

```
[Zentriert, volle Höhe]

[Symbol-Animation: 80px, Schleifen entstehen 2s, dann still]

[margin-top 32px]

[Text:]
"Deine vollständige Analyse ist jetzt sichtbar."
[Raleway 300, 1rem, Gedämpft, zentriert]

[margin-top 24px]

[CTA: "✦ Mein Profil lesen", Smaragd, 280px max]

[margin-top 16px]

[E-Mail-Hinweis: 0.8rem, Gedämpft]

[Auto-Redirect nach 3s mit Countdown: "Weiter in 3... 2... 1..."]
```

---

## DESIGN-ANNOTATIONS (Pflicht für jeden Screen)

Jeder Mockup muss folgende Informationen als Annotation enthalten:

| Annotation | Inhalt |
|---|---|
| Farbe | Hex-Code aus DESIGN_SYSTEM_V1.md |
| Schrift | Font + Weight + Size + Line-Height |
| Abstände | Alle Margins/Paddings in px |
| Zustände | Normal + Hover + Focus + Disabled |
| Mobile/Desktop | Separate Versionen wenn abweichend |
| Brand-Regel-Referenz | Z.B. "D3 (Weißraum)" |

---

## MOCKUP-REIHENFOLGE (Build-Priorität)

```
Sprint 1 (Launch-kritisch):
  1. PR-01 Formular Mobile
  2. PR-02 Profil Teaser Mobile
  3. PR-03 Paywall Mobile
  4. CH-01 Checkout Mobile
  5. CH-02 Bestätigung Mobile

Sprint 2 (vor Launch):
  6. PR-04 Profil nach Kauf Mobile
  7. LP-01 Landingpage Mobile
  8. Desktop-Versionen aller Sprint-1-Screens

Sprint 3 (Post-Launch):
  9. E-Mail-Templates
  10. Desktop-LP vollständig
```

---

## DESIGN-REVIEW CHECKLISTE

Vor Übergabe an Entwicklung muss jeder Mockup geprüft werden:

- [ ] Hintergrundfarbe ist `#0F0E14` oder `#18161F`
- [ ] Keine dritte Schriftart eingeführt
- [ ] Kein esoterisches Symbol oder Bild verwendet
- [ ] CTA in Smaragd `#1E7A52`
- [ ] CTA-Text entspricht CHECKOUT_SYSTEM.md (kein "Kaufen")
- [ ] Weißraum ausreichend (mindestens D3-Regel)
- [ ] Symbol immer als SVG, nie als PNG/JPG
- [ ] Mobile: CTA Full-Width, min. 52px Höhe
- [ ] Paywall: Blur-Overlay vorhanden, kein harter Cut
- [ ] Abschlusstext korrekt: "Du hast nichts Neues bekommen."

---

*UI_MOCKUP_SYSTEM.md — Version 1.0 | 2026-06-03*
*Verbindlich. Jeder Mockup-Fehler gegen BRAND_GUIDELINES.md wird zurückgegeben.*
