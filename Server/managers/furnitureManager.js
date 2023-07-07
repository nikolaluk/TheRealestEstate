const Furniture = require('../models/Furniture');

exports.getAll = async (qs) => {
    let query = Furniture.find();

    if(qs.where) {
        let [fieldName, ownerId] = qs.where.split('=');
        ownerId = ownerId.replaceAll('"','');

        query = query.find({_ownerId: ownerId});
    }

    const result = await query;

    return result;
}

exports.getOne = (furnitureId) => Furniture.findById(furnitureId);

exports.editOne = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.removeOne = (furnitureId) => Furniture.findByIdAndRemove(furnitureId);

exports.create = (furnitureData) => Furniture.create(furnitureData);