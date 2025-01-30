const mongoose = require('mongoose');
const itemSchema = require('./itemSchema');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,

        minlength:3
    },
    password:{
        type:String,
        required:true,

        minlength:3
    },
    items:{
        type:[itemSchema],
        required:false
    },
    outfits:{
        type:[[itemSchema]],
        required:false
    },
    token:{
        type:String,
        required:false
    }
});

module.exports = userSchema