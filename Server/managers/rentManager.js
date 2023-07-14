const Rent = require('../models/Rent');

exports.getAll = async () => Rent.find();

exports.getOne = (estateId) => Rent.findById(estateId);

exports.editOne = (estateId, estateData) => Rent.findByIdAndUpdate(estateId, estateData);

exports.removeOne = (estateId) => Rent.findByIdAndRemove(estateId);

exports.create = (rentData) => Rent.create(rentData);