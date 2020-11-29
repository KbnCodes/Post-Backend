const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3005

const mongoose = require('./config/database')
const router = require('./config/routes')

app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/', router)

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})