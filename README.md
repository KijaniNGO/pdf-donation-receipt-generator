# Spendenquittungs PDF Generator

Skript um automatisch Spendenquittungen zu generieren.

## Nutzung

Um Spendenquittungen zu generieren kann die `generate` Funktion aus `donation-receipt-generator` verwendet werden. Diese nimmt ein Objekt mit allen Informationen zur Spende: `{name, address, amount, date}` und einen Dateinamen der zu generierenden Datei entgegen. Das Resultat ist ein PDF wie [dieses](example.pdf)

Hier ein Beispiel Skript zur Generierung einer Spendenquittung:

```js
const generate_receipt = require('./donation-receipt-generator').generate

generate_receipt({
    name: 'Tobias Lohse',
    address: 'Franziusweg 65\n12307 Berlin',
    amount: 145.50,
    date: '1.1.2020'
}, 'output_filename.pdf')
```
