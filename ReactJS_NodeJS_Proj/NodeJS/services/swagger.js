// import express from 'express'
// import mysql from 'mysql2'
// import swaggerUi from 'swagger-ui-express'
// import swaggerJsdoc from 'swagger-jsdoc'
// import version from '../package.json'
// import cors from 'cors'

const swaggerJsdoc = require("swagger-jsdoc")
const path = require('path')

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API documentation for the Node.js application',
      },
      servers:[
        {url:'http://localhost:3001/api'}, //you can change you server url
      ],
    },  
    // apis: ['./routes/report.route.js'], //you can change you swagger path
    // Path to API routes
     apis: [path.resolve(__dirname, '../routes/*.js')],
  };
  const specs = swaggerJsdoc(options);
  module.exports = specs;
