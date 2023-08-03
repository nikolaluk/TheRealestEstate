const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    },
    rent: {
        type: Number,
        required: true,
    },
    ownerEmail: {
        type: String,
        required: true,
    },
    ownerId: {
        type: String,
        required: true,
    },
})

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;