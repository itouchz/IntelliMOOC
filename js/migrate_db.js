const admin = require("firebase-admin");
const serviceAccount = require("service-account-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://intellimooc.firebaseio.com"
});


const fs = require('fs')
const csv = require('fast-csv')

let count = 0

fs.createReadStream('../dataset/videos.csv')
    .pipe(csv.parse({ headers: ['data'], renameHeaders: true, delimiter: '\n' }))
    .on('data', row => console.log(row.data.split('_PASA_')))