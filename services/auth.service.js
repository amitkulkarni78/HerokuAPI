const jwt = require('jsonwebtoken');
const User = require('../modules/user.module');
const OTP = require('../modules/otp.module');

module.exports.getBasicToken = async () => {
    let token = await jwt.sign({ clientId: '1234' }, 'basic-key');
    return token;
}

module.exports.getBearerToken = async () => {
    let token = await jwt.sign({ clientId: '1234' }, 'basic-key');
    return token;
}

module.exports.verifyBasicToken = async (token) => {
     let decoded = await jwt.verify(token, 'basic-key');
     if(decoded && decoded.clientId === '1234') {
        // console.log(decoded);
         return true;
     } else {
         return false;
     }
}
module.exports.verifyBearerToken = (token) => {
    jwt.verify(token, 'bearer-key', {} , (res) => {
        console.log(res);
        if(res){
            return true;
        } else {
            return false;
        }
    })
}

module.exports.signup = (obj) => {
    if(!obj.firstName) throw Error('no firstname');
    if(!obj.lastName) throw Error('no lastname');
    if(!obj.email) throw Error('no email');
    if(!obj.password) throw Error('no password');
    User.create(obj).then((user)=> {
        console.log(user);
        return true;
    }).catch(e => {
        throw e
    });    
}
// 1 = signup , 0 = forgot password 
module.exports.sendOTP = (opt, userid, type) => {
    if(type === 1) {
        if(!userId) throw Error('userid required');
        if(!otp) throw Error('opt required');
        OTP.create({
            otp: otp,
            userId: userId,
            verified: false
        }).then((otp) => {
            // mailer logic
        });
    } else {

    }
}

module.exports.reSendOTP = async (id) => {
    let opt = await OTP.findById(id);
    let timeDiff = (new Date() - new Date(opt.createdAt));
    console.log(timeDiff);
    OTP.update({
        _id: id
    },{
        otp: (Math.floor(1000 + Math.random() * 9000))
    });
    // mailier logic to resend opt
}