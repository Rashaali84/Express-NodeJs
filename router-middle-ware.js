// BASE SETUP
// ==============================================

var express = require('express');
var app = express();
var router = express.Router(); // router instance in express module
var port = process.env.PORT || 8000;

//The order you place your middleware and routes is very important

// route middleware that will happen on every request
//the middleware part here is to log something , called by all routes 
router.use(function (req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});
//Route Middleware for Parameters


// home page route (http://localhost:8080)
router.get('/', function (req, res) {
    res.send('im the home page!');
});

// about page route (http://localhost:8080/about)
router.get('/about', function (req, res) {
    res.send('im the about page!');
});

// route middleware to validate :name
router.param('name', function (req, res, next, name) {
    // do validation on name here
    // blah blah validation
    // log something so we know its working
    console.log('doing name validations on ' + name);

    // once validation is done save the new item in the req
    req.name = name;
    // go to the next thing
    next();
});

// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function (req, res) {
    //res.send('hello ' + req.params.name + '!');
    res.send('hello ' + req.name + '!');
});


// ROUTES
// ==============================================
//Now we have defined our two different actions on our /
// login route.Simple and very clean.
app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function (req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function (req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

// apply the routes to our application
app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);


/*Route middleware in
Express is a way to do something before
a request is processed. This could be things
like checking if a user is authenticated,
logging data for analytics, or anything else
 we'd like to do before we actually spit out
 information to our user.*/

/*We will use Express's .param() middleware.
 This creates middleware that will run for a certain
 route parameter. In our case, we are using :name in our
  hello route. Here's the param middleware. */

/*Route middleware for parameters can be used
to validate data coming to your application.
If you have created a RESTful API also, you can validate a
token and make sure the user is able to access your information*/

/*We can define our routes
right on our app. This is similar to using app.get,
 but we will use app.route. app.route is basically
 a shortcut to call the Express Router. Instead of
 calling express.Router(), we can call app.route and
 start applying our routes there.*/