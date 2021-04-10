
let router = require('express').Router();
// this is the default API response
router.get('/', function (req, res) {
    res.json({
        status: ' key value pair to show api is working',
        message: 'Express router '
    });
});
//  API routes
module.exports = router;