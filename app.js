const express = require('express');
const { projects } = require('./data.json');
const { id } = projects;

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
app.get('/project', (req, res) => {
    res.render('project', projects);
    console.log(projects[2].project_name)
    console.log(id)
})

//starts server
app.listen(3000, () => {
    console.log("Application is connected");
});

// If a user navigates to a non-existent route, 
// or if a request for a resource fails for whatever 
// reason, your app should handle the error in a user friendly way.

// Add an error handler to app.js that sets the 
// error message to a user friendly message, 
// and sets the status code.

// Log out a user friendly message to the console 
// when the app is pointed at a URL that doesn't 
// exist as a route in the app, such as /error/error.