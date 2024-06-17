require("dotenv").config();

module.exports = {
  development: {
    // host: process.env.DB_HOST,
    // database: process.env.DB_NAME,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASS,
    host: "127.0.0.1",
    username: "root",
    password: "mysql@123",
    database: "nodejsdb",
    dialect: "mysql",
    port: "3306",
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
};
