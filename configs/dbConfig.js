const mysql = require('mysql')
const pool  = mysql.createPool({
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  port            : 32000,
  database        : 'pokemon_app_db',
})

module.exports = pool