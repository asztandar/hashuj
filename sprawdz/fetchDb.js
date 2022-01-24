const fetch = require("node-fetch");

async function fetchDB(hash) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            hash: hash,
        }),
    };

    const ret = await fetch("http://localhost:3004/checkDb", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log("/checkdb odp: ", data);
            return data;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    return ret;
}

module.exports = {
    fetchDB: fetchDB,
};
