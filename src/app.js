const express = require('express');
const exphbs = require('express-handlebars');
const { join } = require('path');
const router = require('./controllers/index');

// console.log(router);
const app = express();

app.set('port', process.env.PORT || 5000);

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs(
    {
      extname: 'hbs',
      layoutsDir: join(__dirname, 'views', 'layouts'),
      defaultLayout: 'main',
    },
  ),
);


app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(router);

module.exports = app;
