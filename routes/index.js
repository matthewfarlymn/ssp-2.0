var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', {
        title: 'Welcome, to generate jokes '
    });

});

/* GET joke page. */
router.get('/jokes', function(req, res, next) {

    if (!req.session.hasOwnProperty('jokes')) {
        req.session.jokes = [];
    }

    res.render('jokes', {
        title: 'Enter a joke',
        jokes: req.session.jokes
    });

});

/* POST joke page. */
router.post('/jokes', function(req, res, next) {

    if (req.body.joke !== "" && req.body.joke.trim().length > 0) {
        req.session.jokes.push(req.body.joke.trim());
    }

    res.redirect('/jokes');

});

module.exports = router;
