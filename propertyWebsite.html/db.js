const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Vanshika@2007",
  database: "property",
});

module.exports = pool;
