const express = require('express');
const data = require('./data.json');

const app = express();

/////MIDDLEWARE/////
//sets view engine to use pug template engine
app.set('view engine', 'pug');

//serves static files in public folder
app.use(express.static('public'));

/////ROUTES/////
//home route
app.render('/', [data.projects], (req, res) => {
    res.send(`<h1>Testing, testing...</h1>`);
});

//about route
// app.render('/about', (req, res) => {

// })

//dynamic project route



//starts server
app.listen(3000, () => {
    console.log("Application is connected");
});