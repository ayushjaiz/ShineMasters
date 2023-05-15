const mongoose = require('mongoose');

//Defining schema
const workerSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    number: { type: Number, required: true },
    service: { type: String, required: true, trim: true },
})

//Model
const workerDb = mongoose.model("worker", workerSchema)

module.exports = workerDb;