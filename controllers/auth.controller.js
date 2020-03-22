const AuthService = require('../services/auth.service');

module.exports.getToken = async (req,res,next) => {
    try {
        let token = await AuthService.getBasicToken();
        res.status(200).json({
            token : token,
            type: 'basic'
        });
    } catch(e) {
        res.status(500).json({
            message: 'token cannot be generated'
        });
    }   
}

module.exports.signup = async (req,res,next) => {
    console.log(req.body);
    try {
        await AuthService.signup(req.body);
        res.status(200).json({
            message: 'use signed up successfully'
        });
    } catch (e) {
        res.send({
            message: e
        })
    }
   
}