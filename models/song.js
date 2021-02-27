const mongoose = require("mongoose")
const Schema = mongoose.Schema

const songSchema = new Schema({
    track: {
        type: String,
    },
    album: {
        type: String,
    },
    comment: {
        type: String,
    }
})

module.exports = mongoose.model("Song", songSchema)