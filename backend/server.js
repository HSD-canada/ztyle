const http = require('http'); 
const fs = require('fs'); //Read,create... files 
const path = require('path'); //Work with paths
const child_process = require('child_process'); //Run tasks parallel and on different processes
const url = require('url'); //Allows to parse url into diff objects

const {verifyToken} = require('./routes/verify-token');
const {checkHeader} = require('./middleware/checkHeader');

const {parseJSON} = require('./middleware/parseJSON');
const {parseIMG} = require('./middleware/parseIMG');
const {login} = require('./routes/login-route');
const {remIMG} = require('./routes/rem-img');
const { connectDB } = require('./db/db');
const { fetchIMG } = require('./utils/js scripts/fetchImg');
const PORT = 3000;



const server = http.createServer((req,res)=>{
    console.log("Request Incoming");
    const req_url = url.parse(req.url);
  

    if(req_url.pathname==='/api/upload-image'){
        checkHeader(req,res,()=>parseIMG(req,res,()=>{remIMG(req,res)}));
    }
    else if(req_url.pathname ==='/api/modify-image'){
        checkHeader(req,res,()=>parseIMG(req,res,()=>{res.end(req.image)}));
    }
    else if(req_url.pathname === "/api/verify-token"){
        checkHeader(req,res,()=>parseJSON(req,res,()=>verifyToken(req,res)));
    }
    else if(req_url.pathname === '/api/login'){

        checkHeader(req,res,()=>parseJSON(req,res,()=>login(req,res)));

    }
    else{
        res.statusCode = 400;
        res.end("Error: " + req_url.pathname);
    }
});

server.listen(PORT,()=>{
    console.log("Server running");
    connectDB();
});
