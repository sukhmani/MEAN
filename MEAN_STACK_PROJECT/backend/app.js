
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongoose = require('./database/mongoose');
const computer = require('./database/models/computer');
const inventory = require('./database/models/inventory')

var cors = require('express-cors')
 
app.use(cors({
    allowedOrigins: [
        'github.com', 'google.com'
    ]
}))


app.post('/create-button', (req, res) => {
    let postCreateObj = {...req.body}
    console.log(req.body);
    

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


