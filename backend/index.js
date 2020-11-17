const express = require('express')
const app = express()
const volleyball = require('volleyball')
require('dotenv').config()

app.use(volleyball);
 
app.get('/', function (req, res) {

    console.log(process.env.DB_HOST);
    res.send('Hello World')
})
 
app.listen(3000);