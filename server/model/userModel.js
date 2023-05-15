const mongoose = require('mongoose');

//Defining schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    number: { type: Number, required: true },
    password: { type: String, required: true, trim: true },
    address: { type: Boolean, required: true, trim: true }
})

//Model
const userDb = mongoose.model("user", userSchema)

module.exports = userDb;