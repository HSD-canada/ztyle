const mongoose = require('mongoose');
const config = require('./config');
const User = require('../models/userModel')
const DB_URI = "mongodb+srv://hsdcompanyca:fw46ddPIDBxGiwuN@main.xki2c.mongodb.net/?retryWrites=true&w=majority&appName=main";
async function connectDB(){
    try{

        await mongoose.connect(DB_URI);

        console.log('Success: connected to db');


    }catch(e){
        console.error("Error: couldn't connect to db");
    }
}

async function createUser(){
    try{

        const obj={
            username:"tes234t",
            password:"12323423v4"
        };
        const newUser = new User(obj);
        await newUser.save();

        console.log("Saved User");
    }catch(e){
        console.log(e);
    }
}
module.exports = {connectDB}