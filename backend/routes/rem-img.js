const {exec} = require('child_process');
const path = require('path');
const {createTemp} = require('../utils/js scripts/createTemp');


async function remIMG(req,res){
    const imgBase64 = Buffer.from(req.image).toString('base64');
    try{
        await createTemp(imgBase64);
        res.end("Success: saved to db");
    }
    catch(e){
        console.log(e);
        res.end("Error: unable to save to db");

    }


    /*exec(`cd ../utils/python-scripts/ \nsource env/bin/activate\npython remove-bg.py ${name}`, (error, stdout, stderr) => {
        if (error) {
            console.log(error);
        }
        if (stdout) {
            res.end(stdout);
        }
        if (stderr) {
            console.log(stderr);
        }

    })*/


}

module.exports = {remIMG}