const router = require('express').Router();

const userManager = require('../managers/userManager');
const { isAuth } = require('../middlewares/authMiddleware');

router.post('/register', async (req,res) => {
    try{
        const result = await userManager.register(req.body);

        res.json(result);
    } catch(err){
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

router.post('/:userId', isAuth, async(req,res) => {
    try {
        const userId = req.params.userId;
        const estateId = req.body.estateId;
        await userManager.addBookmarkId(estateId,userId);

        res.status(200).end();
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
})

router.put('/:userId', isAuth, async (req,res) => {
    try {
        const userId = req.params.userId;
        const estateId = req.body.estateId;

        await userManager.removeBookmark(estateId,userId);

        res.status(200).end();
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
})

router.get('/:userId', isAuth, async (req,res) => {
    try {
        const userId = req.params.userId;
        const listings = await userManager.returnListings(userId);
        const bookmarks = await userManager.returnBookmarks(userId);

        res.json({listings,bookmarks});
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