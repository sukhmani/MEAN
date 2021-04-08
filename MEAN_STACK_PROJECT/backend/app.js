
const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

var cors = require('express-cors')
 
app.use(cors({
    allowedOrigins: [
        'github.com', 'google.com'
    ]
}))

app.get('/getData', (req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"success"
    })
})

app.use(express.json());
app.listen(3000,() => console.log("Server connected on port 3000"));


