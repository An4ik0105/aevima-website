# AEVIMA — LEGAL CHECKOUT REQUIREMENTS V1
**Version:** 1.0 | 2026-06-07
**Produkt:** KI-generierte Seelenprofil-Analyse — digitaler Inhalt, Sofortauslieferung
**Hinweis:** Keine Rechtsberatung — pragmatische Übersicht für Launch

---

## 1. RECHTLICHE GRUNDLAGE (DE/EU)

**§356 Abs. 5 BGB** + **Art. 16(m) EU-Verbraucherrechterichtlinie:**

Digitale Inhalte sind vom 14-tägigen Widerrufsrecht ausgenommen, **wenn:**
- Auslieferung mit ausdrücklicher Zustimmung des Kunden sofort beginnt
- Kunde bestätigt, dass er damit das Widerrufsrecht verliert
- Beide Zustimmungen **vor** Zahlungsabschluss eingeholt wurden

---

## 2. PFLICHTBESTANDTEILE VOR DEM KAUF

### Checkbox 1 — Widerrufsrecht (Pflicht, nicht vorausgewählt)
```
☐ Ich stimme ausdrücklich zu, dass mit der Ausführung des Vertrags
  sofort begonnen wird. Mir ist bekannt, dass ich hierdurch mein
  Widerrufsrecht verliere.
```

### Checkbox 2 — AGB + Datenschutz (Pflicht, nicht vorausgewählt)
```
☐ Ich habe die AGB und die Datenschutzerklärung gelesen und
  stimme ihnen zu.
```

### Kaufbutton-Beschriftung (Pflicht)
Muss den Zahlungscharakter klar machen:
```
✦ Jetzt kaufen — 39 €
```
oder:
```
✦ Kostenpflichtig bestellen — 39 €
```
*"Freischalten" allein ist nicht ausreichend — muss Zahlungspflicht signalisieren.*

---

## 3. GESPEICHERTE ZUSTIMMUNGEN

| Datenpunkt | Pflicht | Zweck |
|---|---|---|
| Zeitstempel der Zustimmung | ✅ | Nachweis im Streitfall |
| E-Mail-Adresse | ✅ | Zuordnung |
| Checkbox 1 gesetzt (ja/nein) | ✅ | Widerrufsausschluss-Nachweis |
| Checkbox 2 gesetzt (ja/nein) | ✅ | AGB-Zustimmungs-Nachweis |
| IP-Adresse | ⚠️ Empfohlen | Stärkt Nachweis (DSGVO-konform mit Hinweis) |
| AGB-Version | ✅ | Welche AGB-Version zugestimmt wurde |

---

## 4. ZEITPUNKT DER ZUSTIMMUNG

Beide Checkboxen müssen **aktiv** vor dem Klick auf den Kaufbutton bestätigt werden.
Button darf nicht klickbar sein, solange Pflicht-Checkboxen nicht gesetzt. *(optional aber empfohlen)*

---

## 5. RISIKOHINWEISE

| Fehler | Risiko |
|---|---|
| Widerrufs-Checkbox fehlt | Kunde behält 14-Tage-Rückgaberecht |
| Checkbox vorausgewählt | Zustimmung unwirksam |
| Kaufbutton ohne Preisangabe | Vertragsschluss anfechtbar |
| Keine Zustimmungs-Speicherung | Kein Nachweis im Streitfall |
| Keine AGB online erreichbar | Abmahngefahr |

---

## 6. EMPFOHLENE UMSETZUNG FÜR AEVIMA

**checkout.html anpassen:**
1. Zwei Pflicht-Checkboxen vor dem Kaufbutton einfügen
2. Kaufbutton-Text: "Jetzt kaufen — 39 €"
3. Backend speichert bei Webhook: Zeitstempel + E-Mail + Checkbox-Status
4. AGB muss unter `/agb` öffentlich erreichbar sein ✅ (existiert bereits)

**AGB-Pflichttext für digitale Inhalte** (muss in bestehende AGB aufgenommen werden):
> "Der Käufer stimmt ausdrücklich zu, dass die Ausführung des Vertrags sofort nach Zahlungseingang beginnt. Er bestätigt, dass er damit sein Widerrufsrecht verliert."

---

*LEGAL_CHECKOUT_REQUIREMENTS_V1.md — Version 1.0 | 2026-06-07 — ~430 Wörter*
*Kein Ersatz für Rechtsberatung — pragmatische Launch-Grundlage.*
