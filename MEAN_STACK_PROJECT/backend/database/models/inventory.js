const mongoose = require ('mongoose');


const inventorySchema = new mongoose.Schema({
    name:{
        type: String
    },
   
    InStock:{
        type: Boolean,
        default: false,
        required: true
    }
}
);

//const computer = mongoose.model('computer',computerSchema);

const inventory = mongoose.model('inventory', inventorySchema)

module.exports = inventory;