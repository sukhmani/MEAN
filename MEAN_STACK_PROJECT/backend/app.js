/*
const express = require('express');
const app = express();
app.listen(3000,() => console.log("Server connected on port 3000"));
*/

const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.

const uri = "mongodb+srv://u2:p2@cluster0.b4isx.mongodb.net/computerdata?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db('computerdata');
    const computer = database.collection('computer');

    // Query for a computer that has the title 'B'
    const query = { title: 'c' };
    const computer1 = await computer.findOne(query);

    console.log(computer);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





async function run1() {
  try {
    await client.connect();

    const database = client.db('computerdata');
    const computer = database.collection('computer');

    // create an array of documents to insert
    const docs = [
      { name: "Reaaad", town: "alk" },
      { name: "Balue", town: "aKl" },
      { name: "Laeon", town: "aGa" }
    ];

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await computer.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run1().catch(console.dir);
