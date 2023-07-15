const router = require('express').Router();
const rentManager = require('../managers/rentManager');

router.get('/', async (req,res) => {
    try{
        const rents = await rentManager.getAll();

        res.json(rents);
    } catch (err) {
        console.log(err);
    }
    
});

router.post('/', async (req,res) => {
    try {
        await rentManager.create(req.body);

        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot create rent',
        });
    }
})

router.get('/:furnitureId', async(req,res) => {
    const estate = await rentManager.getOne(req.params.furnitureId);

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