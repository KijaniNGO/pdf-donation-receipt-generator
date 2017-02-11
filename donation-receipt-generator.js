// setup functions
PDFDocument = require('pdfkit')
fs = require('fs')

const generatePdf = (contentWriter, filename='out.pdf') => {
    let doc = new PDFDocument({
        size: 'a4',
        margins: {top: 0, bottom: 0, left: 50, right: 50}
    })
    doc.pipe(fs.createWriteStream(filename))
    contentWriter(doc)
    doc.end()
}

// formating functions
const formatDate = (date) => {
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
}

const formatCurrency = (number) => {
    return number.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
    })
}

T2W = require('./numbers2words')
translator = new T2W('DE_DE')

const amountInWords = (number) => {
    if (Number.isInteger(number)) {
        return `${translator.toWords(number)} Euro`
    } else {
        let nstr = Math.round(number*100).toString()
        let euros = Number.parseInt(nstr.substr(0, nstr.length-2))
        let cents = Number.parseInt(nstr.substr(nstr.length-2, 2))
        return `${translator.toWords(euros)} Euro` + (cents ?  ` und ${translator.toWords(cents)} Cent` : '')
    }
}


// style constants
const bree = 'resources/Bree.otf'
const bree_light = 'resources/Bree-light.otf'
const merriweather = 'resources/Merriweather.ttf'
const merriweather_italic = 'resources/Merriweather-italic.ttf'
const merriweather_bold = 'resources/Merriweather-bold.ttf'
const merriweather_bold_italic = 'resources/Merriweather-bold-italic.ttf'

const green = '#6CAC6E'
const gray = '#B5B0AB'
const black = '#000000'

svgs = require('./resources/svgs')
const logo = svgs.logo
const signature = svgs.signature

// define page content
exports.generate = ({name, address, date, amount}) => generatePdf((doc) => {

    // HEADER
    logo(doc, green, 130, 50, 50)
    doc.font(bree_light).fontSize(35).fillColor(gray)
       .text('forests for change', 190, 59)
    doc.font(bree).fontSize(11)
    doc.fillColor(green)
       .text('www.kijani.ngo', 216, 100, {lineBreak: false, link: 'http://kijani.ngo'})
    doc.fillColor(gray)
       .text('  •  ', {lineBreak: false})
    doc.fillColor(green)
       .text('info@kijani.ngo', {link: 'mailto://info@kijani.ngo'})
    doc.lineWidth(1.5).moveTo(216, 117).lineTo(545, 117).stroke(green)
    doc.fillColor(gray)
        .text('Aussteller: Kijani Deutschland e.V.  |  Franziusweg 65  |  12307 Berlin', 0, 122, {align: 'right'})

    // TITLE
    doc.font(bree).fontSize(20).fillColor(green)
       .text('Bestätigung über Geldzuwendung', 50, 200)
    doc.lineWidth(1.5).moveTo(50, 225).lineTo(545, 225).stroke(green)
    doc.font(merriweather_italic).fontSize(9).fillColor(gray)
       .text('im Sinne des § 10b des Einkommensteuergesetzes an eine der in § 5 Abs. 1 Nr. 9 des Körperschaftsteuergesetzes bezeichneten Körperschaften, Personenvereinigungen oder Vermögensmassen', 50, 230)

    // ADDRESSE
    doc.font(merriweather_bold).fontSize(11).fillColor(black)
       .text('Name und Anschrift des Zuwendenden:', 50, 270, {lineGap: 3})
    doc.font(merriweather)
       .text(name, {lineGap: 3})
       .text(address, {lineGap: 3})
    doc.font(merriweather_bold)
       .text('Betrag der Zuwendung', 50, 355, {lineBreak: false})
       .text('Tag der Zuwendung', 50, 355, {align: 'right'})

    // AMOUNT
    doc.lineWidth(1).moveTo(50, 375).lineTo(545, 375).stroke(black)
    doc.font(merriweather)
       .text(formatCurrency(amount), 50, 380, {lineBreak: false})
       .text(amountInWords(amount), 130, undefined, {lineBreak: false})
       .text(date, {align: 'right'})
    doc.font(merriweather_italic).fontSize(9).fillColor(gray)
       .text('in Ziffern', 50, undefined, {lineBreak: false})
       .text('in Buchstaben', 130, undefined, {lineBreak: false})
       .text('Datum', {align: 'right'})
    doc.lineWidth(1).moveTo(50, 410).lineTo(545, 410).stroke(black)

    // TEXT
    doc.font(merriweather).fontSize(11).fillColor(black)
       .text('Die Einhaltung der satzungsgemäßen Vorraussetzungen nach den §§ 51, 59, 60 und 61 AO wurde vom Finanzamt für Körperschaften I, StNr. 27/670/62976 im letzten uns zugegangenen Freistellungsbescheid bzw. mit Bescheid vom 13.7.2015 nach § 60a AO gesondert festgestellt. Wir fördern nach unserer Satzung den Umweltschutz und die Entwicklungszusammenarbeit in Ostafrika sowie die Bildung.', 50, 430, {lineGap: 3, paragraphGap: 11, align: 'justify'})
    doc.font(merriweather_bold).fontSize(11).fillColor(green)
       .text('Es wird bestätigt, dass die Zuwendung nur zur Förderung des Umweltschutzes und der Entwicklungszusammenarbeit in Ostafrika sowie der Bildung verwendet wird.', {lineGap: 3, paragraphGap: 11, align: 'justify'})
    doc.font(merriweather).fontSize(11).fillColor(black)
       .text('Es wird bestätigt, dass über die in der Gesamtsumme enthaltenen Zuwendungen keine weiteren Bestätigungen, weder formelle Zuwendungsbestätigungen noch Beitrags- quittungen oder ähnliches ausgestellt wurden und werden.', {lineGap: 3, paragraphGap: 11, align: 'justify'})
       .text('Ob es sich um den Verzicht auf Erstattung von Aufwendungen handelt, ist der Anlage zur Sammelbestätigung zu entnehmen.', {lineGap: 3, paragraphGap: 11, align: 'justify'})

    // SIGNATURE
    doc.text(`Berlin, ${formatDate(new Date)}`, 50, 690)
    signature(doc, green, 200, 135, 650)
    doc.font(merriweather_italic).fontSize(9).fillColor(gray)
      .text('(Tobias Lohse, Vorsitzender)', 325, 690)

    // FOOTER
    doc.lineWidth(1).moveTo(50, 710).lineTo(545, 710).stroke(gray)
    doc.font(merriweather_bold_italic)
       .text('Hinweise: ', 50, 715, {continued: true})
    doc.font(merriweather_italic)
       .text('Diese Zuwendungsbestätigung wird gemäß unserer schriftlichen Anzeige beim Finanzamt Berlin vom 12.2.2014 automatisiert unterschrieben. | Wer vorsätzlich oder grob fahrlässig eine unrichtige Zuwendungsbestätigung erstellt oder wer veranlasst, dass Zuwendungen nicht zu den in der Zuwendungsbestätigung angegebenen steuerbegünstigten Zwecken verwendet werden, haftet für die entgangene Steuer (§ 10b Abs. 4 EStG, § 9 Abs. 3 KStG, § 9 Nr. 5 GewStG). | Diese Bestätigung wird nicht als Nachweis für die steuerliche Berücksichtigung der Zuwendung anerkannt, wenn das Datum des Freistellungsbescheides länger als 5 Jahre bzw. das Datum der vorläufigen Bescheinigung länger als 3 Jahre seit Ausstellung der Bestätigung zurückliegt (BMF vom 15.12.1994 - BStBl I S. 884).', {align: 'justify'})
}, filename='example.pdf')
