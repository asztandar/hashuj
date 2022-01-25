const fetch = require('node-fetch');

async function sendServer(userText,md5){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            userText: userText,
            hash: md5
        }),
    };

    const odp = await fetch("http://server-labproj24.apps.ocp.lab.cloudpak.site/addDB", requestOptions)
            .then((response) => response.json())
            .then((data) => {
               console.log("/addDB odp: ",data)
               return data;
            })
            .catch((error) => {
                console.error('Error:', error);
              });
    return odp;
}
module.exports={
    sendServer: sendServer
}