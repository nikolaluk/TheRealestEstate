const router = require('express').Router();

const rentManager = require('../managers/rentManager');
const userManager = require('../managers/userManager');

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
        const rent = await rentManager.create(req.body);
        
        await userManager.addListingId(rent._id.toString(), rent.ownerId)

        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: 'Cannot create rent',
        });
    }
})

router.get('/:rentId', async(req,res) => {
    const estate = await rentManager.getOne(req.params.rentId);

    res.json(estate);
});

router.put('/:rentId', async(req,res) => {
    await estateManager.editOne(req.params.rentId,req.body);

    res.status(204).end();
});

router.delete('/:rentId', async(req,res) => {
    await rentManager.removeOne(req.params.rentId);

    res.status(204).end();
});

module.exports = router;