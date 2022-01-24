const querystring = require("querystring");
const http = require("http");
const dotenv = require('dotenv').config();
const axios = require("axios");

const qs = require("qs");




async function processRes(hash){
    let resRet = "";
    const parameters = {
        hash: hash,
        hash_type: "md5",
        email: process.env.EMAIL,
        code: process.env.CODE,
    };
    const post_data = querystring.stringify(parameters);
    console.log(post_data);
    const odp =await  axios
        .post("https://md5decrypt.net/Api/api.php?".concat(post_data))
        .then((res) => {
            console.log(`res.data: ${res.data}`);
            resRet = res.data;
        })
        .catch((error) => {
            console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
            console.error(error);
            resRet = 0;
        });
    return resRet
}



async function checkInApi(hash) {
    
    let odp = await processRes(hash);
    console.log("odp: ", odp)
    if(odp.length<0 || !odp)
    {
        console.log("if")
        console.log("odp.length: ",odp.length)
        return 5
    } 
    else if (odp.search("ERREUR") !=-1) {
        console.log("else if")
        console.log("odp.search('ERREUR')",odp.search("ERREUR"))
        return 5
    }
    else {
        console.log("else")
        console.log("odp: ", odp)
        return odp;
    }
}

module.exports = {
    checkInApi: checkInApi,
};
