var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var session;
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret:'askfhla09013*&*afdajfa#',
    resave:false,
    saveUninitialized:true
}));
//path
app.use(express.static(path.join(__dirname, 'public')));

//Route

//Home
app.get('/', function(req, res){
    res.render('home', {
        title: "Sistem Informasi Mesjid Cibiru"
    });
});

app.get('/sign-up', function(req, res){
    res.render('sign-up');
});

app.get('/', function(req, res){
    res.sendFile('./views/home', {root: __dirname});
});

app.post('/login', function(req, res){
    session = req.session;
    //res.end(JSON.stringify(req.body));
    if(req.body.email == 'ibnuaziznu@gmail.com' && req.body.password == 'admin'){
        session.uniqueID = req.body.email;
    }
    res.redirect('/redirects');
});

app.get('/redirects', function(req, res){
    session = req.session;
    if(session.uniqueID){
        res.redirect('/admin');
    }else{
        res.end('Who Are You???');
    }
});
//pageNotfound
app.get('*', function(req, res){
    res.send("<h2>Page Not Found</h2>")
});
app.listen('3000', function(req, res){
    console.log("This application running at port 3000");
});