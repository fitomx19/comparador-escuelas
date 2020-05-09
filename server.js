
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var partials = require('express-partials');
// Create a new Express application.
var app = express();
require('./db');
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

var Chart = require('chart.js');

// Configure view engine to render EJS templates.


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(partials());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
// Sere esta escuchando
app.listen(port, host, () => {
    console.log('Servidor en puerto', port);
});



/* heroku login
$ heroku git: clone - a blogwave
$ cd blogwave
$ git add .
$ git commit -am "please workds"
$ git push heroku master 
$ git push origin master



metasd e mañana subir informacion a los otros cuadritos y ver si puedo crear una api de mis profesores....

*/