# AEVIMA — CHECKOUT SYSTEM
**Version:** 1.0 | 2026-06-03
**Zweck:** Vollständige Definition des Kaufprozesses
**Grundprinzip:** Der Checkout fühlt sich nicht wie ein Verkauf an. Er ist der nächste logische Schritt einer begonnenen Erkenntnisreise.

---

## 1. PRODUKTSTRUKTUR (Launch 1)

### Das Produkt

**AEVIMA Seelenprofil — vollständig**

Enthält:
- Herzwunsch (LZ + Seelenzahl-Kombination wenn verfügbar)
- Beziehungsmuster (LZ-basiert)
- Ausdruckszahl (vollständig)
- Geldmuster (LZ-basiert)
- Lebenszahl-Teaser (frei sichtbar, bereits gesehen)
- Persönliches Jahr + Pinnacle-Analyse

**Preis:** 59 €
**Einmalig.** Kein Abo. Kein Ablaufdatum. Kein Zugangsschlüssel der verfällt.

### Was nicht existiert

- Kein Basic/Premium-Splitting (ein Produkt, ein Preis)
- Keine Upsells beim Checkout
- Keine Ratenzahlung (Preis zu niedrig, unnötige Komplexität)
- Keine Gutscheincodes zum Launch (Markenpositionierung)
- Kein "Upgrade jetzt" nach dem Kauf

---

## 2. CHECKOUT-SEITE

### Was auf der Checkout-Seite erscheint

```
[Minimaler Header: AEVIMA Symbol 32px + "aevima.com"]

[Linke Spalte — Desktop | Oben — Mobile: Produkt-Zusammenfassung]

  [Abschnitt: Was du bekommst]
  "AEVIMA Seelenprofil"
  [Cinzel, 1rem, Off-White]

  [4 Punkte in Raleway 300, Gedämpft:]
  ✦ Herzwunsch — vollständig
  ✦ Beziehungsmuster — vollständig
  ✦ Ausdruckszahl — vollständig
  ✦ Geldmuster — vollständig

  [Preis-Linie:]
  "59 €"  [Cinzel, 2rem, Rose Gold]
  "Einmalig · Kein Abo"  [Raleway 300, 0.8rem, Gedämpft]

[Trenn-Divider]

[Rechte Spalte — Desktop | Unten — Mobile: Zahlungsbereich]

  [Stripe Payment Element — eingebettet]
  [Darunter: Kaufbutton]
```

### Was NICHT auf der Checkout-Seite erscheint

- ❌ Countdown-Timer
- ❌ "Nur noch X Plätze verfügbar!"
- ❌ Durchgestrichene Preise
- ❌ Bewertungssterne oder Reviews
- ❌ Exit-Intent Popups
- ❌ "Warte! Sonderangebot!"-Mechanik
- ❌ Chat-Widget das sich aufdrängt
- ❌ Upsell-Angebote
- ❌ Nachrichten wie "347 Personen kauften heute"
- ❌ Sicherheits-Badge-Überladung (1 reicht)

### Design der Checkout-Seite

- Hintergrund: `#0F0E14`
- Karten-Hintergrund: `#18161F`
- Max-Width: 960px Desktop, Full-Width Mobile
- Minimal. Klar. Kein Ablenkungselement.

---

## 3. VERTRAUENSELEMENTE

### Was hilft beim Kauf

| Element | Platzierung | Format |
|---|---|---|
| "Einmalig. Kein Abo." | Unter Preis | Raleway 300, Gedämpft |
| "Sofortiger Zugang nach Zahlung" | Unter Kaufbutton | Raleway 300, 0.8rem |
| SSL-Sicherheit (1 Badge) | Unter Zahlungsfeld | Minimales Icon |
| Datenschutz-Link | Footer | Text-Link |

### Was die Premium-Wirkung zerstört

- Mehrere Sicherheits-Badges übereinander (wirkt billig, nicht sicher)
- "Geld-zurück-Garantie" zum Launch (zu viel Misstrauen impliziert)
- Fake-Bewertungen
- Stock-Foto-Testimonials
- Aggressive Sicherheitssprache ("100% sicher und geschützt!")

### Vertrauens-Philosophie

AEVIMA verdient Vertrauen durch die Qualität des Produkts — nicht durch Versicherungen beim Checkout.
Der Nutzer hat bereits die Vorschau gelesen. Das ist der Vertrauensaufbau.

---

## 4. KAUFBUTTON

### Verboten

- ❌ "Kaufen"
- ❌ "Jetzt bestellen"
- ❌ "Zur Kasse"
- ❌ "Kostenpflichtig bestellen"
- ❌ "Jetzt bezahlen"

### AEVIMA-konform

Primär:
```
"✦ Mein Profil freischalten"
```

Alternative:
```
"✦ Vollständige Analyse entsperren"
```

**Stil:**
```css
background: linear-gradient(135deg, #1E7A52, #167044);
color: #EDE9E2;
font-family: 'Cinzel', serif;
font-size: 0.85rem;
font-weight: 700;
letter-spacing: 0.2em;
padding: 18px 48px;
min-height: 56px;
width: 100%;
border-radius: 2px;
```

### Unter dem Button (Legal-Text)

```
"Mit dem Klick akzeptierst du unsere AGB und Datenschutzerklärung."
[Raleway 300, 0.75rem, Gedämpft]
"Sofortiger Zugang. Einmalige Zahlung. Kein Abo."
[Raleway 300, 0.8rem, Türkis]
```

---

## 5. ZAHLUNGSARTEN

### Priorität

| Rang | Methode | Grund |
|---|---|---|
| 1 | Apple Pay | Mobile-First, 1-Click, höchste Conversion |
| 2 | Google Pay | Android-Nutzer, 1-Click |
| 3 | Kreditkarte (Stripe) | Universell |
| 4 | PayPal | Optional, zweite Wahl |

### Mobile Payment First

Auf Mobile: Apple Pay / Google Pay erscheinen als erste Option — über dem Formular, volle Breite.
Kreditkarten-Formular darunter — ausgeklappt erst bei Bedarf.

### Stripe-Integration

Stripe Payment Element verwenden (unterstützt alle Methoden in einer Komponente).
Styling: Dark Mode, passend zu AEVIMA-Farben (Stripe unterstützt Custom Appearance API).

```javascript
// Stripe Appearance
appearance: {
  theme: 'night',
  variables: {
    colorPrimary: '#1E7A52',
    colorBackground: '#18161F',
    colorText: '#EDE9E2',
    colorDanger: '#D64545',
    fontFamily: 'Raleway, sans-serif',
    borderRadius: '2px',
  }
}
```

---

## 6. KAUFBESTÄTIGUNG

### Ablauf nach erfolgreicher Zahlung

```
1. Stripe-Zahlung bestätigt → Redirect auf Bestätigungsseite
2. AEVIMA Symbol Animation (2 Sekunden: Schleifen entstehen)
3. Bestätigungsnachricht erscheint
4. Automatischer Redirect zur Profil-Seite nach 3 Sekunden
   (oder: "Weiter zu meinem Profil" Button)
```

### Bestätigungsseite

```
[Symbol Animation: 80px, Rose Gold, Schleifen entstehen ruhig]

[Abstand: 32px]

[Text:]
"Deine vollständige Analyse ist jetzt sichtbar."
[Raleway 300, 1rem, Gedämpft, zentriert]

[Abstand: 24px]

[CTA:]
"✦ Mein Profil lesen"
[Smaragd, 280px max]

[Abstand: 16px]

[Email-Hinweis:]
"Eine Bestätigung wurde an [email] gesendet."
[Raleway 300, 0.8rem, Gedämpft]
```

### Was auf der Bestätigungsseite verboten ist

- ❌ "Herzlichen Glückwunsch!"
- ❌ Konfetti-Animation
- ❌ "Du hast eine großartige Entscheidung getroffen!"
- ❌ Sofortiger Upsell ("Hole dir auch die Synastrie!")
- ❌ Social-Share-Buttons

**Ton:** Stille. Ankunft. Kein Jubel.

---

## 7. E-MAIL-SYSTEM

### E-Mail 1 — Sofortige Kaufbestätigung (< 1 Minute)

**Betreff:** "Dein AEVIMA Profil ist bereit."

```
[AEVIMA Symbol, 40px]

"[Vorname],

deine vollständige Analyse ist jetzt zugänglich.

[Button: "✦ Mein Profil öffnen"]

Was dich erwartet:
· Herzwunsch
· Beziehungsmuster
· Ausdruckszahl
· Geldmuster

Nimm dir Zeit dafür.

— AEVIMA"
```

**Ton:** Kurz. Ruhig. Kein Überschwang.
**Keine:** Bullet-Points über "amazing features", kein "Willkommen in der AEVIMA-Familie"

### E-Mail 2 — Follow-Up (nach 72 Stunden, optional)

**Betreff:** "Eine Frage, [Vorname]."

```
"Ich frage mich manchmal, welcher Satz aus einer Analyse
am meisten bewegt.

Falls du magst: Antworte auf diese E-Mail.

— AEVIMA"
```

**Zweck:** Feedback sammeln, Verbindung herstellen.
Keine Marketing-Logik. Echter Mensch der fragt.

### E-Mail-Design

- Dark Mode (Hintergrund `#0F0E14` oder `#18161F`)
- Raleway 300 für Text
- Cinzel für Überschriften
- Maximale Breite: 600px
- Kein buntes Template
- Kein Unternehmenslayout

---

## 8. ERFOLGSMETRIKEN

### Kern-KPIs (definiert, aber nicht optimiert durch Dark Patterns)

| Metrik | Ziel Launch | Messmethode |
|---|---|---|
| Landingpage → Profil-Start | > 25% | Analytics |
| Profil-Start → Paywall gesehen | > 80% | Scroll-Tracking |
| Paywall gesehen → Checkout | > 15% | Funnel |
| Checkout → Kauf | > 60% | Stripe |
| **Gesamtkonversion LP → Kauf** | **3–5%** | **Ziel Launch** |

### Abbruchanalyse

Wo verlassen Nutzer den Prozess?
1. Hero → kein Scroll: Headline nicht stark genug
2. Profil-Vorschau → kein Kaufklick: Paywall-Position zu früh
3. Checkout → Abbruch: Zahlungsreibung oder Preis

### Was NIEMALS als Conversion-Tool eingesetzt wird

- Exit-Intent Popups
- Retargeting-Werbung mit FOMO-Text
- E-Mail-Sequenzen mit künstlicher Dringlichkeit
- A/B-Tests die Nutzer manipulieren

### Was legitim ist

- A/B-Tests auf Headline und CTA-Text
- Heatmaps zur Scroll-Tiefenanalyse
- Nutzerfeedback durch Follow-Up-E-Mail

---

## 9. PREIS-RATIONALE

### Warum 59 €

- Unter 30 € wirkt AEVIMA wie ein Impulskauf — das ist nicht die Zielgruppe
- Über 100 € erfordert mehr Vertrauen als ein Launch-Produkt aufgebaut hat
- 59 € ist: "Ich habe mich entschieden. Nicht impulsiv. Bewusst."
- Vergleich: 1 Therapiestunde 80–120 €, 1 Coaching-Session 150–300 €. AEVIMA ist günstiger und tiefer.

### Zukünftige Preisstrategie

Säule 1 (Seelenprofil): 59 € (aktuelle)
Säule 2 (Synastrie): 79–97 €
Säule 3 (Kosmischer Kalender): 97 € einmalig / 9,99 €/Monat
Säule 4 (Astrocartography): 147–197 €

Bundle-Option später: "Vollständiges AEVIMA" alle Säulen.

---

*CHECKOUT_SYSTEM.md — Version 1.0 | 2026-06-03*
*Verbindlich. Keine Conversion-Taktik darf die Markenidentität beschädigen.*
