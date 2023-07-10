const Estate = require('../models/Estate');

exports.getAll = async () => Estate.find();

exports.getOne = (estateId) => Estate.findById(estateId);

exports.editOne = (estateId, estateData) => Estate.findByIdAndUpdate(estateId, estateData);

exports.removeOne = (estateId) => Estate.findByIdAndRemove(estateId);

exports.create = (estateData) => Estate.create(estateData);