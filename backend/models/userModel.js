const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema.js');

const User =  mongoose.model('User',userSchema,"users");

module.exports = User;