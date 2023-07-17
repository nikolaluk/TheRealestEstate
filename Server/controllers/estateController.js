const router = require('express').Router();
const estateManager = require('../managers/estateManager');
const userManager = require('../managers/userManager');

router.get('/', async (req,res) => {
    try{
        const estates = await estateManager.getAll();

        res.json(estates);
    } catch (err) {
        console.log(err);
    }
    
});

router.post('/', async (req,res) => {
    try {
        const estate = await estateManager.create(req.body);

        await userManager.addListingId(estate._id.toString(), estate.ownerId);
        
        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot create estate',
        });
    }
})

router.get('/:furnitureId', async(req,res) => {
    const estate = await estateManager.getOne(req.params.furnitureId);

    res.json(estate);
});

router.put('/:furnitureId', async(req,res) => {
    await estateManager.editOne(req.params.furnitureId,req.body);

    res.status(204).end();
});

router.delete('/:furnitureId', async(req,res) => {
    await estateManager.removeOne(req.params.furnitureId);

    res.status(204).end();
});

module.exports = router;