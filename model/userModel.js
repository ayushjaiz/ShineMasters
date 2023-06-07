const mongoose = require('mongoose');

//Defining schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    number: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    bookedWorkers: { type: [String] }
})

//Model
const User = mongoose.model("user", userSchema)

module.exports = User;