const mongoose =require("mongoose");
const tempModel = require('../../models/tempModel');

async function createTemp(image){
    const tmp = new tempModel({
        image:image
    });
    const savedTmp = await tmp.save();
    console.log(`Temp image saved to db. ID: ${savedTmp._id}`);

}

module.exports = {createTemp};