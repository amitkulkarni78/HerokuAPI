const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
    otp: {
        type: String,
        required: true
    },
    userId: String,
    verified: {
        type: Boolean,
        default: false
    }
},{
    autoIndex: true,
    versionKey: false,
    timestamps:{
        createdAt: true,
        updatedAt: true
    }
});

const OTP = mongoose.model('OTP', OTPSchema);
module.exports = OTP;