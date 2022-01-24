const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Połączyłęm się z bazą danych !!");
  });

module.exports = con;