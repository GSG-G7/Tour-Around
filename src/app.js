const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./controllers/index');

// console.log(router);
const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(router);

module.exports = app;
