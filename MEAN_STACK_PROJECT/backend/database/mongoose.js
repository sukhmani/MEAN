

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
    const query = { title: 'B' };
    const computer = await computer.findOne(query);

    console.log(computer);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);