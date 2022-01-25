const fetch = require('node-fetch')

async function fetchKoduj(body){
    let odp ={
        userTextHash: "",
        responseCode: "",
    }
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            userText: body.userText,
            checkboxChoose: body.checkboxChoose
        }),
    };

   await fetch("http://kodowanie-labproj24.apps.ocp.lab.cloudpak.site/encrypt", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("data: ", data)
                odp.userTextHash = data.userTextHash;
                odp.responseCode = data.responseCode;
            })
            .catch((error) => {
                console.error('Error:', error);
              });
    return odp;        
}

module.exports={
    fetchKoduj:fetchKoduj
}