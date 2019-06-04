var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Enter contact router');
    console.log('Time: ', Date.now());
    next();
});

// all users
router.get('/', function(req, res) {
    res.send('list of users');
});

// contact
router.get('/:userId', function(req, res) {
    res.send('user : ' + req.params.userId);
});

// define the about route
router.get('/about', function(req, res) {
    res.send('About contact');
});

module.exports = router;