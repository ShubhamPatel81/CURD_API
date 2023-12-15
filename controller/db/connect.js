const mongoose = require("mongoose");
const connectionSting = "mongodb://127.0.0.1:27017/data_association"
const connectdb = () => {
    return mongoose.connect(connectionSting).then(() => {
        console.log('connected to database')
    }).catch(() => {
        console.error('could not connected to the database')
    })
}

// mongoose.connect(connectionSting).then(() => {
//     console.log('connected to the database')
// }).catch(() => {
//     console.log('could not connect to the database')
// })

module.exports = connectdb;