const mongoose = require('mongoose')

const koalaSchema = mongoose.Schema({
    meta_name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true,
    },
    meta_value: {
        type: String,
        required: true,
    }
})

const Koala = mongoose.model('Koala', koalaSchema)

module.exports = Koala