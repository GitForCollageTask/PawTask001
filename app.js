var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes');
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
app.use(session({
    secret:'askfhla09013*&*afdajfa#',
    resave:false,
    saveUninitialized:true
}));
app.get('/', routes.home);
app.get('/sign-up', routes.signup);
app.get('/admin', routes.admin);
app.post('/admin', routes.session);
app.get('/redirects', routes.redirect);
app.get('*', routes.notFound);
app.listen('3000', routes.listen);