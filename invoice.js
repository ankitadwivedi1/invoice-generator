//Import the library into your project
var Prodsmithsnvoice = require('Prodsmithsinvoice');
var fs = require('fs');
 
var data = {
    //"documentTitle": "RECEIPT", //Defaults to INVOICE
    "currency": "USD",
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://i.ytimg.com/vi/znopivlCrm8/maxresdefault.jpg", 
    //"logoExtension": "png"
    "sender": {
        "company": "Prodsmiths    ",
        "address": "Marine Drive ,Mumbai",
        "zip": "xyz",
        "city": "Mumbai",
        "country": "India"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2"
        
    },
    "client": {
        "company": "Client Corp",
        "address": "Clientstreet 456",
        "zip": "4567 CD",
        "city": "Clientcity",
        "country": "Clientcountry"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2"
        
    },
    "invoiceNumber": "2020.0001",
    "invoiceDate": "05-01-2020",
    "products": [
        {
            "quantity": "2",
            "description": "Test1",
            "tax": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax": 21,
            "price": 10.45
        }
    ],
    "bottomNotice": "Kindly pay your invoice within 1 days."
};
 
//Create your invoice! 
Prodsmithsinvoice.createInvoice(data, async function (result) {
    //The response will contain a pdf encoded PDF file
    console.log(result.pdf);

    // store localLy 

    await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
});


 
const data = {};
const result = await Prodsmithsinvoice.createInvoice(data);                       
await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');

//for download
const data = {};
Prodsmithsinvoice.createInvoice(data, function (result) {
    Prodsmithsinvoice.download('myInvoice.pdf', result.pdf);
      
});