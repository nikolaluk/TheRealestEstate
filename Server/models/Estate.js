const mongoose = require('mongoose');

const estateSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }
});

const Estate = mongoose.model('Estate', estateSchema);

module.exports = Estate;