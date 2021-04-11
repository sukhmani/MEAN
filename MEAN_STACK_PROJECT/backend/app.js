
const express = require('express');
const app = express();
let bodyParser = require('body-parser');
const mongoose = require('./database/mongoose');
const computer = require('./database/models/computer');
let apiRoutes = require('./api-routes');


var cors = require('express-cors');
app.use('/api', apiRoutes);

// C bodyparser to handle post req
app.use(bodyParser.urlencoded({
    extended: true
 }));
 

app.use(bodyParser.json());

app.get('/', (req, res) => res.send(' Express: Default URL'));

app.use(cors({
    allowedOrigins: [
        'github.com', 'google.com'
    ]
}))

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

app.get('/getData', (req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"success"
    })
})


app.get('/computer', (req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"success"
    })
})

// check for DB connection
if(!mongoose)
    console.log("Error ")
else
    console.log(" connected!")

app.use(express.json());
app.listen(3000,() => console.log("Server connected on port 3000"));


