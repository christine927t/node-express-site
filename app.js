const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

/////MIDDLEWARE/////
//sets view engine to use pug template engine
app.set('view engine', 'pug');

//serves static files in public folder
app.use('/static', express.static('public'));

app.use('/', indexRouter);

app.use((req, res, next) => {
    const err = new Error("Sorry, this page does not exist!");
    err.status = 404;
    next(err);
});

/////ERROR HANDLER/////
app.use((err, req, res, next) =>{
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

//starts server
app.listen(3000, () => {
    console.log("Application is connected");
});

module.exports = app;

// If a user navigates to a non-existent route, 
// or if a request for a resource fails for whatever 
// reason, your app should handle the error in a user friendly way.

// Add an error handler to app.js that sets the 
// error message to a user friendly message, 
// and sets the status code.

// Log out a user friendly message to the console 
// when the app is pointed at a URL that doesn't 
// exist as a route in the app, such as /error/error.