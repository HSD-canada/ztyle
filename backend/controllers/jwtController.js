const {createJWT} = require('../utils/js scripts/jwtToken');

function generateToken(req,res){
    const payload = req.body;
    try{
        const token = createJWT(payload);
        return token;
    }
    catch(e){
        console.log(e);
        res.end("Error: couldn't generate token");
        res.statusCode = 400;
    }
}

module.exports = {generateToken};