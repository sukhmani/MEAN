
const express = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const mongoose = require('./database/mongoose');
const computer = require('./database/models/computer');
const inventory = require('./database/models/inventory')


 



app.post('/create-button', (req, res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,AcceptSS")
    let postCreateObj = {...req.body}
    console.log(req.body);
res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE ');
    return res.status(200).json({message: `${postCreateObj.name} created successfully..`})
})





app.use(express.urlencoded());
app.use(express.json());

/*

app.get('/inventory', (req,res)=>{
    inventory.find({})
    .then(computer => res.send(computer))
    .catch((error) => console.log(error));
   
});

*/

app.get('/inventory',computer.findOne);



app.get('/getData', (req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"success"
    })
})


app.listen(3000,() => console.log("Server connected on port 3000"));


