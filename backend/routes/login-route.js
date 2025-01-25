const {generateToken} = require('../controllers/jwtController');
const {logThis} = require('../middleware/logThis');
function login(req,res){
    const body = req.body;
    const username  = body.username;
    const password = body.password;

    if(username === "husan" && password === "1234"){
        res.statusCode = 200;
        const date = new Date();
        const time = date.getTime();
       
        
        req.body = {...req.body,
            loginTime : time,
            tokenExpiry : '1h',
        }
        const jwt = generateToken(req,res);
        let resObj = {
            token:jwt
        }
        const log = {
            type:"login",
            status:"success",
            details:{
                time: time,
                username: username,
            }
        }
        logThis(log);
        
        res.end(JSON.stringify(resObj));
    }
    else{
        res.statusCode = 400;
        res.end("Error: invalid username/password");
    }
}

function test(){

}

module.exports = {login};

test();