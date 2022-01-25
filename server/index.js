const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const con = require('./db/db');


dotenv.config();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get('/', (req, res) => {
    res.json({'message': process.env.PORT, 'app': "server"});
  })
  
app.post('/checkDb',async (req,res)=>{
  console.log("checkDb endpoint")
  console.log('req.body: ', req.body)
  con.query(`SELECT * FROM hash WHERE hash.hash = '${req.body.hash}'`,async function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    let string=JSON.stringify(result);
    let json =  JSON.parse(string);
    if(json[0]) {
      console.log("znalazlem: ", json[0]);
     await res.json({
        userHash : req.body.hash,
        hashText : json[0].tekst,
        responseCode : 3
      })
    }
    else{
      console.log("nie znalazlem: ", json);
     await res.json({
        userHash : req.body.hash,
        hashText : "",
        responseCode : 4
      })
    }
    
  });
})


app.post('/addDB', async(req,res)=>{
  const hash = req.body.hash;
  const userText = req.body.userText;
  console.log("addDB endpoint")
  console.log('req.body: ', req.body)
  con.query(`SELECT * FROM hash WHERE hash.hash = '${hash}'`,async function (err, result, fields) {
    if (err) throw err;
    let string=JSON.stringify(result);
    let json =  JSON.parse(string);
    if(json[0]) {
      console.log("znalazlem: ", json[0]);
     await res.json({
        userHash : req.body.hash,
        hashText : json[0].tekst,
        responseCode : 2
      })
    }
    else{
      console.log("nie znalazlem: ", json);
      const sql = `INSERT INTO hash (hash, tekst) VALUES ('${hash}', '${userText}')`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("dodano do bazy")
      });
     await res.json({
        userHash : hash,
        hashText : userText,
        responseCode : 1
      })
    }
    
  });

})



  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
  });