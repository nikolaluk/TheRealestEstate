const jwt = require('jsonwebtoken');

exports.auth = (req,res,next) => {
    const token = req.header('X-Authorization');

    if(token) {
        try{
            const decodedToken = jwt.verify(token,'SECRET');

            req.user = decodedToken;

            next();
        } catch(err) {
            res.status(401).josn({
                message: 'You are not authorized',
            })
        }
    } else {
        next();
    }
}

exports.isAuth = (req, res, next) => {
    if(!req.user){
        res.status(400).json({
            message: 'Forbiden!',
        });
        return;
    }

    next();
}