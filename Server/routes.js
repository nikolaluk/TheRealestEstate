const router = require('express').Router();

const userController = require('./controllers/userController');
const estateController = require('./controllers/estateController');

router.use('/users', userController);
router.use('/estates', estateController);

module.exports = router;