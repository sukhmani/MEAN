
const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

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

app.get('/', (req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"Hello Hi"
    })
})




app.get('/getData', (req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"success"
    })
})


app.listen(3000,() => console.log("Server connected on port 3000"));


