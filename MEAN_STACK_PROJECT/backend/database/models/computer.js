const mongoose = require ('mongoose');


const computerSchema = new mongoose.Schema({
    name:{type: String},
    typy:{type: String},
    memory:{type: String},
    version:{type: String},
    quantity:{type: Number}
});

//const computer = mongoose.model('computer',computerSchema);



// Export Computer model
var computer = module.exports = mongoose.model('computer', computerSchema);

module.exports.get = function (callback, limit) {
    computer.find(callback).limit(limit);
}

