const generate_receipt = require('./donation-receipt-generator').generate

// generate document
generate_receipt({
    name: 'Tobias Lohse',
    address: 'Wilhelmshavener Str. 22 \n10551 Berlin',
    date: '11.2.2017',
    amount: 123.999
})