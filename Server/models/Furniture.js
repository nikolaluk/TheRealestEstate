const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;