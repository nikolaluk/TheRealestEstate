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

router.get('/:estateId', async(req,res) => {
    const estate = await estateManager.getOne(req.params.estateId);

    res.json(estate);
});

router.put('/:estateId', async(req,res) => {
    await estateManager.editOne(req.params.estateId,req.body);

    res.status(204).end();
});

router.delete('/:estateId', async(req,res) => {
    await estateManager.removeOne(req.params.estateId);

    res.status(204).end();
});

module.exports = router;