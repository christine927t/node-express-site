const express = require('express');
const data = require('data.json');

//sets view engine to use pug template engine
app.set('view engine', 'pug');

//
app.use('static', 'public');