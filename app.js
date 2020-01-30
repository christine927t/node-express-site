const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

/////MIDDLEWARE/////
//sets view engine to use pug template engine
app.set('view engine', 'pug');

//serves static files in public folder
app.use('/static', express.static('public'));

//serves router file in routes folder
app.use('/', indexRouter);

////404 error catch///
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