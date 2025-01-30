

function parseIMG(req,res,next){
    let body = []; 
    const headers = req.headers['content-type'];
    let boundary = headers.split('boundary=')[1];

    req.on('data',chunk=>{
        body.push(chunk);
    })
    req.on('end',()=>{
        try{
            body.forEach((e,i)=>{
                if(e.includes(`--${boundary}`)){
                    const part = e.toString("binary").split(`--${boundary}`)[1];
                    const parts = part.split('\r\n\r\n');
                    if(parts[0] && parts[1]){
                        body[i] = Buffer.from(parts[1],"binary");

                    }
                    else{
                        body[i] = Buffer.from(part,"binary");
                    }
                }
                else{
                    body[i] = e;
                }
            })
            const imgBuffer = Buffer.concat(body);
            req.image = imgBuffer;
            next();
        }
        catch(e){
            res.statusCode = 400;
            res.end("Error: unable to parse image");
        }
    })

}

module.exports = {parseIMG}