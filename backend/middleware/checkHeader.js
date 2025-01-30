

function checkHeader(req,res,next){
    const reqHeader = req.headers['content-type'];
    if(reqHeader){
        if(reqHeader.includes("application/json") || reqHeader === "multipart/form-data"){

            next();}

        else{
            res.statusCode = 400;
            res.end("Error: invalid content-type");
            console.log(reqHeader);
        }
    }
    else{
        res.statusCode = 400;
        res.end("Error: no valid header provided");

    }
}

module.exports ={checkHeader};