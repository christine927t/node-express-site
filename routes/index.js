const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//home page route
router.get('/', (req, res, next) => {
    res.render('index', { projects });
});

//about page route
router.get('/about', (req, res, next) => {
    res.render('about');
});

// dynamic project page route
router.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    if(project) {
      res.render('project', { project });
    } else {
      res.sendStatus(404);
    }
});


module.exports = router;