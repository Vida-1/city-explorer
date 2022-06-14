_Just making some notes while I code this out as I never seem to have enough time to go back and read stuff later!_

### CORS
CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. The same-origin security policy forbids cross-origin access to resources. [MDN](https://developer.mozilla.org/en-US/docs/Glossary/CORS#:~:text=CORS%20(Cross%2DOrigin%20Resource%20Sharing,cross%2Dorigin%20access%20to%20resources))

### Middleware
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

**_Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next._**

Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

* Application-level middleware
* Router-level middleware
* Error-handling middleware
* Built-in middleware
* Third-party middleware
You can load application-level and router-level middleware with an optional mount path. You can also load a series of middleware functions together, which creates a sub-stack of the middleware system at a mount point. [Expressjs.com](https://expressjs.com/en/guide/using-middleware.html)


Both classes and constructor functions both make objects.
The following Forecast function has properties of `date` and `description`.

function Forecast(day) {
  this.day = day.valid_date;
  this.description = day.weather.description;
}

The above built as a class instead of a function would be: 

class Forecast() {
  constructor(day) {
  this.day = day.valid_date;
  this.description = day.weather.description;
  }
}

Note: I think this is what they wanted me to use on lab 6 error handling: 
// Create a function to handle errors from any API call.
app.use('*', (reqeust, response) => response.status(404).send('that endpoint does not exist'));
