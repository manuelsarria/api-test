const express = require('express')
const app = express()
const path = require('path')
const port = 4000;
//const dotenv = require('dotenv');
require('dotenv').config();

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(require('./routes/index'))
app.use(express.static(path.join(__dirname,'public')))
app.listen(port, () => {
    // dotenv.config();
    console.log(`** Server TRACKING PTY on listen port ${port} **`);
})