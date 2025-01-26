
const mongoose = require('mongoose');
const tempSchema= require('../schemas/itemSchema');

const tempModel = new mongoose.model("Temp",tempSchema,"temp");

module.exports = tempModel;