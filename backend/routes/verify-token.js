const { verifyJWT } = require("../utils/js scripts/jwtToken");


function verifyToken(req,res){
    const token = req.body.token;
    if(token){
        const valid = verifyJWT(token);
        if(valid){
            res.statusCode = 200;
            res.end("Success: token valid");
    
        }
        else{
            res.statusCode = 400;
            res.end("Error: token invalid");
        }
    }
    else{
        res.statusCode = 400;
        res.end("Error: token not provided");
    }
}

module.exports = {verifyToken};