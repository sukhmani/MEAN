
const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
<<<<<<< HEAD
const computer = require('./database/models/computer');
let apiRoutes = require('./api-routes');

=======
>>>>>>> parent of 6952423 (database connection check - working)

var cors = require('express-cors')
 
app.use(cors({
    allowedOrigins: [
        'github.com', 'google.com'
    ]
}))

<<<<<<< HEAD


=======
>>>>>>> parent of 6952423 (database connection check - working)
app.get('/getData', (req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"success"
    })
})

<<<<<<< HEAD

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

=======
>>>>>>> parent of 6952423 (database connection check - working)
app.use(express.json());
app.listen(3000,() => console.log("Server connected on port 3000"));


