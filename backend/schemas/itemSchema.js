const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    owner:{
        type:String
    },
    image:{
        type:String
    }
});

module.exports = itemSchema;