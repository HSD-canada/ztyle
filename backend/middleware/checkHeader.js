

function checkHeader(req,res,next){
    const reqHeader = req.headers['content-type'];
    if(reqHeader){
        if(reqHeader === "application/json"){

            next();}
        else{
            res.statusCode = 400;
            res.end("Error: invalid content-type");
        }
    }
    else{
        res.statusCode = 400;
        res.end("Error: no valid header provided");

    }
}

module.exports ={checkHeader};