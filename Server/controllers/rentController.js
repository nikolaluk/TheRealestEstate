const router = require('express').Router();

const rentManager = require('../managers/rentManager');
const userManager = require('../managers/userManager');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async (req, res) => {
    try {
        const rents = await rentManager.getAll();

        res.json(rents);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }

});

router.post('/', isAuth, async (req, res) => {
    try {
        const rent = await rentManager.create(req.body);

        await userManager.addListingId(rent._id.toString(), rent.ownerId)

        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
})

router.get('/:rentId', async (req, res) => {
    try {
        const rent = await rentManager.getOne(req.params.rentId);

        res.json(rent);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
});

router.put('/:rentId', isAuth, async (req, res) => {
    try {
        const rent = await rentManager.getOne(req.params.rentId);
        const isOwner = req.user?._id == rent.ownerId;

        if (!isOwner) {
            throw new Error('Unauthorized!');
        }

        await rentManager.editOne(req.params.rentId, req.body);

        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
});

router.delete('/:rentId', isAuth, async (req, res) => {
    try {
        const rent = await rentManager.getOne(req.params.rentId);
        const isOwner = req.user?._id == rent.ownerId;

        if (!isOwner) {
            throw new Error('Unauthorized!');
        }

        await rentManager.removeOne(req.params.rentId);

        res.status(204).end();
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
});

module.exports = router;