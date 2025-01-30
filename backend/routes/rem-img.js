const {spawn} = require('child_process');
const sharp = require('sharp');
const {createTemp} = require('../utils/js scripts/createTemp');
const net = require('net');
const fs = require('fs');
const { promisify } = require('util');

const convert = require('heic-convert');



const client = new net.Socket();
const pathname = "/tmp/mysocket";

const chunksize = 1 * 1024*1024;  //1 MB

async function remIMG(req,res){

    const command = spawn('/bin/bash', [
        '-c',
        'cd /Users/husan/Desktop/Personal/Hackathon/ztyle/ztyle/backend/utils/python-scripts && source env/bin/activate && python remove-bg.py'
      ]);

    let buffer = req.image;
    const metadata = await sharp(buffer).metadata();
    console.log("Original Format : " + metadata.format);


        if(metadata.format=='heif'){
                const inputBuffer = buffer;
                const outputBuffer = await convert({
                  buffer: inputBuffer, // the HEIC file buffer
                  format: 'JPEG',      // output format
                  quality: 1           // the jpeg compression quality, between 0 and 1
            });    
            buffer = outputBuffer;
            console.log("Converting Format");
            buffer = await convert2PNG(buffer);
        
        }
        else{
            buffer = buffer;
        }
      
    
        client.on('error',()=>{
            console.log("Error: no available server");
            res.statusCode=400;
            res.end();
        })
        
        client.connect(pathname,()=>{
            console.log("Connected to python socket");
            let offset =0;
            while(offset < buffer.length){
                const chunk = buffer.slice(offset,chunksize+offset);
                client.write(chunk);

                offset+= chunksize;
            }
            client.end()
                


        });
        

        

        
        let body = [];
        client.on('data',(data)=>{
            body.push(data);
        })
        client.on('end',()=>{
            const newBuffer = Buffer.concat(body);
            res.end(newBuffer);
            console.log("Success: image sent")
        })

}

async function convert2PNG(buffer){
    const buffer2= await sharp(buffer).toFormat('png').toBuffer();
    return buffer2;
}

module.exports = {remIMG}

