
//https://expressjs.com/en/guide/routing.html

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
})
// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

app.get('/random.text', function (req, res) {
    res.send('random.text')
})

//This route path will match acd and abcd.

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
})

//This route path will match abcd, abbcd, abbbcd, and so on.

app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
})
//This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
})

//This route path will match / abe and / abcde.

app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e')
})
//This route path will match anything with an “a” in it.

app.get(/a/, function (req, res) {
    res.send('/a/')
})
//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/')
})
/*
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
*/
//To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})
/*
Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.

Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }


*/

/*To have more control over the exact string that can be matched by a route parameter, you can append a regular expression in parentheses(()):

Route path: /user/: userId(\d +)
Request URL: http://localhost:3000/user/42
req.params: { "userId": "42" }
*/
//Because the regular expression is usually part of a literal string, be sure to escape any \ characters with an additional backslash, for example \\d+
//More than one callback function can handle a route(make sure you specify the next object).For example:

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from B!')
})
//An array of callback functions can handle a route.For example:

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

var cb2 = function (req, res) {
    res.send('Hello from C!')
}
//A combination of independent functions and arrays of functions can handle a route.For example:

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from D!')
})

app.get('/example/c', [cb0, cb1, cb2])


app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

/*There is a special routing method, app.all(),
 used to load middleware functions at a path for
 all HTTP request methods. For example, the following handler
 is executed for requests to the route “/secret” whether using
  GET, POST, PUT, DELETE, or any other HTTP request method
   supported in the http module.*/


/*
Method 	Description
res.download() 	Prompt a file to be downloaded.
res.end() 	End the response process.
res.json() 	Send a JSON response.
res.jsonp() 	Send a JSON response with JSONP support.
res.redirect() 	Redirect a request.
res.render() 	Render a view template.
res.send() 	Send a response of various types.
res.sendFile() 	Send a file as an octet stream.
res.sendStatus() 	Set the response status code and send its string representation as the response body.
*/












//https://expressjs.com/en/guide/routing.html