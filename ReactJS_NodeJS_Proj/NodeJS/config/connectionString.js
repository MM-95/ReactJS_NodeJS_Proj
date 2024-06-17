const mysql = require('mysql2/promise')

const dbconfig = {
    host: "127.0.0.1",
    user: "root",
    password: "mysql@123",
    database: "nodejsdb",
  };


  // Create a connection pool
const pool = mysql.createPool(dbconfig);

module.exports = pool;