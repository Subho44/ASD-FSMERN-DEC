const mongoose = require('mongoose');

const userschema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true,unique:true },
        password: { type: String, required: true },
        otp: { type: String, default:null },
        otpExpire: { type: Date, default:null },
        isVerified: { type: Boolean, default: false },

    },
{timestamps:true});

module.exports = mongoose.model('User', userschema);