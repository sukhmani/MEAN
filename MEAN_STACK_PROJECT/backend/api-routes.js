
let router = require('express').Router();

const computer = require('./database/models/computer');
var mongoose = require('./database/mongoose');

// this is the default API response
router.get('/', function (req, res) {
    res.json({
        status: ' key value pair to show api is working',
        message: 'Express router '
    });
});

// Computer routes
router.route('./models/computer')
    .get(mongoose.index)
   .post(mongoose.new);
 router.route('/computer/:computer_id')
    .get(mongoose.view)
    .patch(mongoose.update)
    .put(mongoose.update)
    .delete(mongoose.delete);
    



//  API routes
module.exports = router;