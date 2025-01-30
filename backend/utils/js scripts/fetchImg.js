const fs = require('fs');
const tempModel = require('../../models/tempModel')

async function fetchIMG(req,res){
    const id = req.body.id;
    if(id){

    
    try{
        const file = await tempModel.findById(id);
        const fileBuffer = Buffer.from(file.image,"base64");
        res.end(fileBuffer);
    }catch(e){
        res.end("Error: cant be fetching from db");
        console.log(e);
    }
  

    
    }
    else{
        res.end("Error: invalid id")
    }
}

module.exports = {fetchIMG};