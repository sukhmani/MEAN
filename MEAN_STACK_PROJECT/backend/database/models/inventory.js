const mongoose = require ('mongoose');


const inventorySchema = new mongoose.Schema({
    name:{
        type: String
    },
   
    InStock:{
        type: String
        
    }
}
);

//const computer = mongoose.model('computer',computerSchema);

var inventory = mongoose.model('inventory', inventorySchema);

module.exports.get = function (callback, limit) {
    inventory.find(callback).limit(limit);
}
module.exports = inventory;