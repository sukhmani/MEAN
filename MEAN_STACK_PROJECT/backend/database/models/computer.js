const mongoose = require ('mongoose');

const computerSchema = new mongoose.Schema({
    name:{type: String},
    town:{type: String},
    version:{type: String},
    quality:{type: Number}
});

const computer = mongoose.model('computer',computerSchema)