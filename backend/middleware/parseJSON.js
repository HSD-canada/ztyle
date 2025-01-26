
function parseJSON(req,res,next){
    let body = '';
    req.on('data',chunk=>{
        body += chunk.toString();
        
    });
    req.on('end',()=>{
        try{
            
            req.body = JSON.parse(body);
            next();
        }
        catch(e){
            res.statusCode= 400;
            res.end("Error: unable to parse to JSON");
            console.error(e);
        }
    })
}

module.exports = {parseJSON};