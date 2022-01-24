const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();
var cors = require('cors');
const { checkInApi } = require('./checkInApi');
const { fetchDB } = require('./fetchDb');
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get('/', (req, res) => {
    res.json({'message': process.env.PORT});
  })

app.get('/existModule', (req,res) =>{
    console.log("elo")
    res.json({'existModule': true})
})

 app.post('/checkHash',async (req,res) =>{
    console.log("elo")
    console.log(req.body)
    const hash = req.body.userHash;
    const checkinapiodp = await checkInApi(hash);
    console.log("checkapiodp: ",checkinapiodp)

    if(checkinapiodp != 5) {
      console.log("checkinapiodp : ", checkinapiodp)
      res.json({
        'userHash': hash,
        'hashText': checkinapiodp,
        'responseCode': 5
      })
    }
    else{
      console.log("sprawdzDB")
      const odp = await fetchDB(hash)
      console.log("fetchdb: ",odp)
      res.json({
        'userHash': odp.userHash,
        'hashText': odp.hashText,
        'responseCode': odp.responseCode
      })
    }

})
  
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  });