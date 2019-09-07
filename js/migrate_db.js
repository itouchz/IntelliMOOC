// const admin = require("firebase-admin");
// const serviceAccount = require("intellimooc-firebase-admin.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://intellimooc.firebaseio.com"
// });


const fs = require('fs')
const videos = JSON.parse(fs.readFileSync('../dataset/videos.json'))

let videos_obj = Object.keys(videos['youtube_id']).map(key => Object.create({}))
const keys = Object.keys(videos)

keys.map(key => {
    for (const [index, value] of Object.entries(videos[key])) {
        videos_obj[index][key] = value
    }
})

console.log(videos_obj[0])