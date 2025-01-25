
function logThis(log){
    const type = log.type;
    const status = log.status;
    const details = log.details;

    const logMsg = `\n\nLog \n--- \n Type : ${type} \n Status : ${status} \n ---`;
    console.log(logMsg);
}

module.exports = {logThis};