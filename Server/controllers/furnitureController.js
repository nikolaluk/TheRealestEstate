const router = require('express').Router();
const furnitureManager = require('../managers/furnitureManager');

router.get('/', async (req,res) => {
    try{
        const furnitures = await furnitureManager.getAll(req.query);

        res.json(furnitures);
    } catch (err) {
        console.log(err);
    }
    
});

router.post('/', async (req,res) => {
    try {
        await furnitureManager.create({
            ...req.body,
            _ownerId: req.user._id,
        });
        
        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot create furniture',
        });
    }
})

router.get('/:furnitureId', async(req,res) => {
    const furniture = await furnitureManager.getOne(req.params.furnitureId);

    res.json(furniture);
});

router.put('/:furnitureId', async(req,res) => {
    await furnitureManager.editOne(req.params.furnitureId,req.body);

    res.status(204).end();
});

router.delete('/:furnitureId', async(req,res) => {
    await furnitureManager.removeOne(req.params.furnitureId);

    res.status(204).end();
});

module.exports = router;