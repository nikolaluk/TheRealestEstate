const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
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
    }
})

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;