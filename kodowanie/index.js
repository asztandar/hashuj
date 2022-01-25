const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();
var cors = require('cors');

const fetch = require('node-fetch');
const PORT = process.env.PORT;

const md5 = require('md5');
const { sendServer } = require('./sendToServer');


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get('/', (req, res) => {
    res.json({'message': process.env.PORT, 'app': "kodowanie"});
  })


app.post('/encrypt', async(req,res) =>{
    let md5hash = "";
    console.log("encrypt endpoint")
    console.log("req: ", req.body)
    md5hash = md5(req.body.userText)
    if(req.body.checkboxChoose){
      const odp = await sendServer(req.body.userText, md5hash)
      res.json({
        userTextHash: odp.userHash,
        responseCode: odp.responseCode
    })
    }
    else{
        res.json({
            userTextHash: md5hash,
            responseCode: 0
        })
    }
})

  
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
  });