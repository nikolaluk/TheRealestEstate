const Rent = require('../models/Rent');

exports.getAll = async () => Rent.find();

exports.getOne = (rentId) => Rent.findById(rentId);

exports.editOne = (estateId, estateData) => Rent.findByIdAndUpdate(estateId, estateData);

exports.removeOne = (estateId) => Rent.findByIdAndRemove(estateId);

exports.create = (rentData) => Rent.create(rentData);