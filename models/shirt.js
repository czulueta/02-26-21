const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shirtSchema = new Schema({
    tshirt: {
        type: String,
    }
})

module.exports = mongoose.model("Tshirt", shirtSchema)