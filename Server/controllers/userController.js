const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register', async (req,res) => {
    try{
        const result = await userManager.register(req.body);

        res.json(result);
    } catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message,
        })
    }
});

router.post('/login', async (req,res) => {
    try {
        const result = await userManager.login(req.body);

        res.json(result);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
});

router.get('/:userId', async (req,res) => {
    try {
        const id = req.params.userId;
        const listings = await userManager.returnListings(id);

        res.json(listings);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
});

router.get('/logout',(req,res) => {
    res.end();
});

module.exports = router;