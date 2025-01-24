const http = require('http'); 
const fs = require('fs'); //Read,create... files 
const path = require('path'); //Work with paths
const child_process = require('child_process'); //Run tasks parallel and on different processes
const url = require('url'); //Allows to parse url into diff objects
//const {remove} = require('./controllers/removeBg');

const PORT = 3000;



const server = http.createServer((req,res)=>{
    console.log("Request Incoming");
    const req_url = url.parse(req.url);
    if(req_url.pathname === '/remove-bg' && req.method === "POST"){
        res.statusCode = 200;
        res.end("API!");
    }
    else{
        res.statusCode = 400;
        res.end("No Access");
    }
});

server.listen(PORT,()=>{
    console.log("Server running");
});
