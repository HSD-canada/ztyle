const http = require('http'); 
const fs = require('fs'); //Read,create... files 
const path = require('path'); //Work with paths
const child_process = require('child_process'); //Run tasks parallel and on different processes
const url = require('url'); //Allows to parse url into diff objects

const {verifyToken} = require('./routes/verify-token');
const {checkHeader} = require('./middleware/checkHeader');

const {parseJSON} = require('./middleware/parseJSON')

const {login} = require('./routes/login-route');
const PORT = 3000;



const server = http.createServer((req,res)=>{
    console.log("Request Incoming");
    const req_url = url.parse(req.url);
    if(req_url.pathname === "/api/verify-token"){
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
});
