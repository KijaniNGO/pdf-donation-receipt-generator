const generate_receipt = require('./donation-receipt-generator').generate

// fs = require('fs')
// readCSV = require('csv-load-sync')

// let data = readCSV('../inge-geburtstagsspenden.csv');
// data = data.map((d) => Object.assign(d, {address: d.address.replace('\\n', '\n')}))

// for (let info of data) {
//     generate_receipt(info, `Spendenbescheinigung_${info.filename}_2017.pdf`)
// }

generate_receipt({
    name: 'Tobias Lohse',
    address: 'Franziusweg 65\n12307 Berlin',
    amount: 145.50,
    date: '1.1.2020'
})

generate_receipt({
    name: 'gut.org gemeinnützige Aktiengesellschaft',
    address: 'Schlesische Straße 26\n10997 Berlin',
    amount: 285.00,
    date: '28.6.2016'
}, 'betterplace_2016.pdf')