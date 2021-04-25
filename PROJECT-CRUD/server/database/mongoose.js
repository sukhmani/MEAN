
const { MongoClient } = require("mongodb");
const  mongoose  = require("mongoose");
const computer = require("./models/computer");
const inventory = require("./models/inventory")
const bodyParser = require('body-parser');
mongoose.Promise =global.Promise;


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
    const query = { name: 'a' };
    const computer1 = await computer.findOne(query);

    console.log(computer1);
  } finally {
    // Eclient will close when  done
    await client.close();
  }
}
//run().catch(console.dir);





async function run1() {
  try {
    await client.connect();

    const database = client.db('computerdata');
    const computer = database.collection('computer');

    // create an array of documents to insert
    const docs = [
      { name: "Reaaad", memory: "alk", version: "q" },
      { name: "a", memory: "aKl", version: "w" },
      { name: "c", memory: "aGa" , version: "1", quantity: "5"}
    ];

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await computer.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
//run1().catch(console.dir);


const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  retryWrites: true,
  useCreateIndex: true,
  useFindAndModify: false,
  w: 'majority',
};

connectToDb = async function () {
  try {
      mongoose.connect(`${uri}`, options);
      console.log(`Database connected..`);
  } catch (e) {
      console.log("db connection error", e);
      process.exit(1);
  }
};


/*
async function run2() {
    try {
      await client.connect();
      const database = client.db('computerdata');
      const computer2 = database.collection('computer');
      // Query for a movie that has a title of type string
      const query = { name: 'c' };
      const result1 = await computer2.deleteOne(query);
    
        console.log(result1);
    
    } finally {
      await client.close();
    }
  }
  run2().catch(console.dir);
  */

  
exports.index = function (req, res) {
  computer.get(function (err, computer) {
      if (err) {
          res.json({
              status: "error",
              message: err,
          });
      }
      res.json({
          status: "success in handling index",
          message: "Computer found",
          data: computer
      });
  });
};


// Handle create computer
exports.new = function (req, res) {
  var computer = new Computer();
  computer.name = req.body.name ? req.body.name : computer.name;
  computer.type = req.body.type ? req.body.type : computer.type;
  computer.memory = req.body.memory;
  computer.version = req.body.version;
  computer.quantity = req.body.quantity;
// save the contact and check for errors
  computer.save(function (err) {
      // if (err)
      //     res.json(err);
res.json({
          message: 'New computer added',
          data: computer
      });
  });
};


module.exports = {
  connectToDb

};




