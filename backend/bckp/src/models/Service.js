const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    code: String,
    type: Boolean,
    clientName: String,
    colectAddress: String,
    destinationAddress: String,
    collaborator: Object,
    createdBy: Object,
    createdAt: Date,
    status: Number,
    vehicle: Object
})

module.exports = mongoose.model('Service', ServiceSchema);