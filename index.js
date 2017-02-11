PDFDocument = require('pdfkit')
fs = require('fs')

const generatePdf = (contentWriter, filename='out.pdf') => {
    let doc = new PDFDocument
    doc.pipe(fs.createWriteStream(filename))
    contentWriter(doc)
    doc.end()
}


generatePdf((doc) => {
    doc.font('resources/Bree.otf').fontSize(15).fillColor('#6CAC6E')
   .text('Sammelbestätigung über Geldzuwendungen/Mitgliedsbeitrag')
}, filename='example.pdf')
