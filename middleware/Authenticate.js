const AuthService = require('../services/auth.service');

module.exports.authenticateUser = (req,res,next) => {
    if(req.headers) {
        if(req.headers.authorization) {
            let [type,token] = req.headers.authorization.split(' ');
            if(type === 'basic'){
                if(AuthService.verifyBasicToken(token)){
                    req.next();
                } else {
                    res.status(403).json({
                        message: 'token invalid'
                    });
                }
            } else if(type === 'bearer'){
                if(AuthService.verifyBearerToken(token)){
                    res.next();
                } else {
                    res.status(403).json({
                        message: 'token invalid'
                    });
                }
            }
        } else {
            res.status(402).json({
                message: 'no authorization'
            });
        }
    } else {
        res.status(402).json({
            message: 'no headers'
        })
    }
}

