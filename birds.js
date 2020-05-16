var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router


/*

Then, load the router module in the app:
var birds = require('./birds')
// ...
app.use('/birds', birds)
The app will now be able
to handle requests to /birds and /birds/about,
as well as call the timeLog middleware function
that is specific to the route.

*/