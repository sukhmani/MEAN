
const express = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const mongoose = require('./database/mongoose');
const computer = require('./database/models/computer');
const inventory = require('./database/models/inventory');


app.post('/create-button', async (req, res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,AcceptSS")
    let postCreateObj = {...req.body}
    console.log(req.body);

    try{

        const result = await computer.create(postCreateObj);
    
            console.log(result);
        }catch(e){console.log('e', e);}
    

res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE ');
    return res.status(200).json({message: `${postCreateObj.name} created successfully..`})
    
    
})

app.get('/read-button/:computername', async (req, res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,AcceptSS")
    let getObj = {...req.params}
    console.log('getObj', req.params);

    try{

        
        const result = await computer.findOne({name: getObj.computername});
            console.log(result);
            res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE ');

            return res.status(200).json({message: `The computer: ${result.name} Has version ${result.version} and memory ${result.memory}`});

        }catch(e){console.log('e', e);}
    

      
   // return res.status(200).json({message: `${getObj.result} read successfully..`})

})

app.put('/update-button', async (req, res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,AcceptSS")
    let postUpdateObj = {...req.body}
    console.log(req.body);

    try{


        const result = await computer.updateOne({name: postUpdateObj.computername}, postUpdateObj);

            console.log(result);
        }catch(e){console.log('e', e);}
    

res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE ');
    return res.status(200).json({message: `${postUpdateObj.name} updated successfully..`})

})

app.use(express.urlencoded());
app.use(express.json());

app.get('/inventory',computer.findOne);





async function startServer() {

    await connectToDb();
    
    app.listen(3000,() => console.log("Server connected on port 3000"));
    }
    startServer();
    



