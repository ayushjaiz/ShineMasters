const mongoose = require('mongoose');

//Defining schema
const workerSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    number: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    avaliable: { type: Boolean, default: true }
})

//Model
const Worker = mongoose.model("worker", workerSchema)

module.exports = Worker;