# Express-NodeJs  https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm 

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.
To restrict it to a specific route (and all its subroutes), provide that route as the first argument of app.use(). For Example,

`var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});

// Route handler that sends the response
app.get('/things', function(req, res){
   res.send('Things');
});

app.listen(3000);`

### Order of Middleware Calls

One of the most important things about middleware in Express is the order in which they are written/included in your file

`var express = require('express');
var app = express();

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End');
});

app.listen(3000);`

![image](https://user-images.githubusercontent.com/30797974/81477057-d1337380-9215-11ea-9e20-d54800454e6d.png)

###Third Party Middleware  http://expressjs.com/en/resources/middleware.html

body-parser

This is used to parse the body of requests which have payloads attached to them. To mount body parser, we need to install it using npm install --save body-parser and to mount it, include the following lines in your index.js −
var bodyParser = require('body-parser');

//To parse URL encoded data
`app.use(bodyParser.urlencoded({ extended: false }))`

//To parse json data
`app.use(bodyParser.json())`

To view all available options for body-parser, visit its github page.

cookie-parser

It parses Cookie header and populate req.cookies with an object keyed by cookie names. To mount cookie parser, we need to install it using npm install --save cookie-parser and to mount it, include the following lines in your index.js −

`var cookieParser = require('cookie-parser');
app.use(cookieParser())`
