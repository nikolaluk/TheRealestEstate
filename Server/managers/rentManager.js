const Rent = require('../models/Rent');

exports.getAll = async () => Rent.find();

exports.getOne = (rentId) => Rent.findById(rentId);

exports.editOne = (rentId, estateData) => Rent.findByIdAndUpdate(rentId, estateData);

exports.removeOne = (rentId) => Rent.findByIdAndRemove(rentId);

exports.create = (rentData) => Rent.create(rentData);