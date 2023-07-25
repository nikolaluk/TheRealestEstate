const Rent = require('../models/Rent');

exports.getAll = async () => Rent.find();

exports.getOne = (rentId) => Rent.findById(rentId);

exports.editOne = (rentId, rentData) => Rent.findByIdAndUpdate(rentId, rentData);

exports.removeOne = (rentId) => Rent.findByIdAndRemove(rentId);

exports.create = (rentData) => Rent.create(rentData);