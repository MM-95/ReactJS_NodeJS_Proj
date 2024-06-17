const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./services/swagger.js')
const swaggerJsdoc = require("swagger-jsdoc")
require('express-async-errors')
const db = require('./models')

// router
const reportRouter = require('./routers/report_router.js')
const userRouter = require('./routers/user_router.js')

const app = express()
app.use(express.json())
app.use(cors());

app.use('/report', reportRouter);
app.use('/users', userRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send('Something went wrong!')
})

// // Swagger UI setup
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is available now")    
    })
})
  