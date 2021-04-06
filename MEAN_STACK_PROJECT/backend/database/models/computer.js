const mongoose = require ('mongoose');

const computerSchema = new mongoose.Schema({
    name:{type: String},
    town:{type: String},
    version:{type: String},
    quantity:{type: Number}
});

const computer = mongoose.model('computer',computerSchema);

module.exports = computer;