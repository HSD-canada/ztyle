const mongoose = require('mongoose');

const tempSchema = mongoose.Schema({
    image:{
        type:String
    }
});

module.exports = tempSchema;