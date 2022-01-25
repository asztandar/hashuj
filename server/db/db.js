const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}
const con = mysql.createConnection(config);
console.log("config: ", config)
  con.connect(function(err) {
    if (err) throw err;
    console.log("Połączyłęm się z bazą danych !!");
  });

module.exports = con;