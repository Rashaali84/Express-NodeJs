// BASE SETUP
// ==============================================

var express = require('express');
var app = express();
var router = express.Router(); // router instance in express module
var port = process.env.PORT || 8080;

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
http://localhost:8080/sample
app.get('/sample', function (req, res) {
    res.send('this is a sample!');
});

// we'll create our routes here
// home page route (http://localhost:8080)
router.get('/', function (req, res) {
    res.send('im the home page!');
});

// about page route (http://localhost:8080/about)
router.get('/about', function (req, res) {
    res.send('im the about page!');
});

// apply the routes to our application
app.use('/', router);
//app.use('/app',router); // root here is /app

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);


/*Notice how we can set a default root
for using these routes we just defined.If
 we had changed line 21 to app.use('/app', router),
  then our routes would be http://localhost:8080/app
  and http://localhost:8080/app/about.
*/

/*!!!!! This is very powerful because we can
 create multiple express.Router()s and
 then apply them to our application.
 We could have a Router for our basic routes,
  authenticated routes, and even API routes.
  modular and flexible !*/

/*
https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
1- Basic Routes: Home, About
2- Route Middleware to log requests to the console
3-Route with Parameters
4-Route Middleware for Parameters to validate specific parameters
5-login routes Doing a GET and POST on / login
6-Validates a parameter passed to a certain route
*/

//npm init to create package.json
//npm install express
//npm install nodemon



/*express application. It doesn't
bring in views or settings, but provides
us with the routing APIs
like .use, .get, .param, and route. */