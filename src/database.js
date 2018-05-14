const mongoose = require('mongoose')

const dbConnection = mongoose.connection

mongoose.connect(process.env.MONGO_URL)

module.exports = {
    connect() {
        dbConnection.on('error', console.error.bind(console, 'connection error:'));
        dbConnection.once('open', () => {
            console.log("we're connected")
        });
    }
}