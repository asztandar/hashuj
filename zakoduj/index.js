const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();
var cors = require('cors');
const { fetchKoduj } = require('./fetchKoduj');
// const fetch = require('node-fetch');
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get('/', (req, res) => {
    res.json({'message': process.env.PORT, 'app': "zakoduj"});
  })

app.get('/existModule', (req,res) =>{
    console.log("existModule zakoduj")
    res.json({'existModule': true})
})
app.post('/encryptText', async (req,res) =>{
    console.log("encryptText endpoint")
    console.log("req: ", req.body)
    const odp = await fetchKoduj(req.body)
    console.log("encryptText odp: ", odp)

    res.json({userTextHash: odp.userTextHash, responseCode: odp.responseCode})
})

  
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
  });