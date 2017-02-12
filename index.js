fs = require('fs')
readCSV = require('csv-load-sync')

let data = readCSV('../inge-geburtstagsspenden.csv');
data = data.map((d) => Object.assign(d, {address: d.address.replace('\\n', '\n')}))

const generate_receipt = require('./donation-receipt-generator').generate

for (let info of data) {
    generate_receipt(info, `Spendenbescheinigung_${info.filename}_2017.pdf`)
}

generate_receipt({
    name: 'Tobias Lohse',
    address: 'Franziusweg 65\n12307 Berlin',
    amount: 145.50,
    date: '1.1.2020'
})