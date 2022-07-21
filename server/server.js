const express = require('express')
const path = require('path')
const morgan = require('morgan');
const indexRouter = require('./routes/index')
require('dotenv').config()
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())


const PORT = process.env.PORT
app.use('/', indexRouter)



app.listen(PORT, ()=> {
    console.log(`works on the port: ${PORT} `)
})