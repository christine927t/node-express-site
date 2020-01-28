const express = require('express');
const { data } = require('./data.json');
// const { projects } = data;

const app = express();

/////MIDDLEWARE/////
//sets view engine to use pug template engine
app.set('view engine', 'pug');

//serves static files in public folder
app.use(express.static('public'));

/////ROUTES/////
//home route
app.get('/', (req, res) => {
    res.render('index');
});

//about route
app.get('/about', (req, res) => {
    res.render('about');
})

// dynamic project route
app.get('/project/:id', (req, res) => {
    res.send(req.params)
    console.log(req.params)
})


//starts server
app.listen(3000, () => {
    console.log("Application is connected");
});