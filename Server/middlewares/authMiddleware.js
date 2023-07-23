const jwt = require('jsonwebtoken');

exports.auth = (req,res,next) => {
    const token = req.header('X-Authorization');
    //TODO add route guards

    if(token) {
        try{
            const decodedToken = jwt.verify(token,'SECRET');

            req.user = decodedToken;

            console.log(req.user);

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
        throw new Error('Forbiden');
    }

    next();
}