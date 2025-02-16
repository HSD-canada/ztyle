const crypto = require('crypto')
const secret = 'husan';


function createJWT(payload,expiresIn = '1h'){
    const header = {
        alg:'HS256',
        typ:'JWT' 
    }
  
    const headerBase64 = Buffer.from(JSON.stringify(header)).toString('base64url');
    const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString('base64url');



    const signatureBase= `${headerBase64}.${payloadBase64}`;

    const signature = crypto.createHmac('sha256',secret).update(signatureBase).digest('base64url');

    return `${signatureBase}.${signature}`;
}

function verifyJWT(jwt){
    const parts_jwt = splitJWT(jwt);
    if(parts_jwt.length !=3){
        return false;
    }
    else{
        const header = utf_to_json(base_to_utf(parts_jwt[0]));
        const payload = utf_to_json(base_to_utf(parts_jwt[1]));
        const validateTime = calculateExpiry(payload);
        const test_jwt = createJWT(payload);
        if (test_jwt===jwt && validateTime){
            return true;
        }
        return false;
    }  
}

function splitJWT(jwt){ 
    return jwt.split('.');
}

function base_to_utf(base){
    return Buffer.from(base,'base64url').toString('utf8');
}

function utf_to_json(utf){
    return JSON.parse(utf);
}

function calculateExpiry(payload){
    const date = new Date();
    const time = date.getTime();

    const payloadTime = payload.loginTime ;
    



    const differenceMS =  time - payloadTime;
    const differenceS = differenceMS/1000;

    if(differenceS > 1800 ){
        return false;

    }
    else{
        return true;
    }

}



module.exports={createJWT,verifyJWT};