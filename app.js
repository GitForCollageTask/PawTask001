var express = require('express');
var path = require('path');
var router = express.Router();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes');
var mysql = require('mysql');
//var router = express.Router();
var session;
var app = express();
app.set('view engine', 'ejs');
//path
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//session

/*app.use(function(req, res, next) {
  var err =  new Error('Not Found');
  err.status = 404;
  next(err);
});
*/


app.use(session({
    secret:'askfhla09013*&*afdajfa#',
    resave:false,
    saveUninitialized:true
}));
app.get('/', routes.home);
app.get('/sign-up/add', routes.signup);
app.get('/admin', routes.admin);
app.post('/sign-up/add', routes.save);
app.post('/admin', routes.session);
app.get('/redirects', routes.redirects);
app.post('/homeAdmin', routes.homeAdmin);
app.get('*', routes.notFound);
app.listen('3000', routes.listen);

module.exports = app;