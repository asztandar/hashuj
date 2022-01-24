const con = require('./db/db');


async function zwrocWartosc(json){
    let odp = await json
    console.log("ooddppsss: ", odp)
}

async function dbQuery(hash){
    await con.query(`SELECT * FROM hash WHERE hash.hash = '${hash}'`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        let string= JSON.stringify(result);
        let json =  JSON.parse(string);
        if(json[0]) {
        console.log("znalazlem: ", json[0]);
        zwrocWartosc(json[0])
        }
        else{
          console.log("nie znalazlem: ", json);
          zwrocWartosc(json)
        }
      });
}
module.exports={
    dbQuery: dbQuery
}