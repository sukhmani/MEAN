const express = require('express');
const app = express();

const mongoose = require('./database/mongoose')

const List = require('./database/models/Inventorylist');
const Task = require('./database/models/Inventorytask');

app.use((req, res, next) => {

        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept ");
        next();
});



app.get('/Lists',(req, res) => {
  List.find({})
        .then(lists => res.send(lists))  
        .catch((error) => console.log(error));

});

app.use(express.json());

app.post('/', (req, res) =>{
    ( new Task({'title': req.body.title}))
    .save()
    .then((List) => res.send(List))
    .catch((error) => console.log(error));
});
/*
app.get('/lists/:listId',(req, res) => {
        List.find({_id: req.params.listId})
        .then((List) => res.send(List))
        .catch((error) => console.log(error));
});
*/
app.patch('/lists/:listId', (req, res) => {
        List.findOneAndUpdate({'_id': req.params.listId
        },{$set: req.body})
        .then((List) => res.send(List))
        .catch((error) => console.log(error));
});

 app.delete('/lists/:listId', (req, res) => {
        List.findOneAndDelete(req.params.listId)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
})


app.listen(3000, () => console.log("Server connected on port 3000"));