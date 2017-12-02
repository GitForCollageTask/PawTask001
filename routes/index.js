var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var json = require('res-json');

    var con = mysql.createPool({
    connectionLimirt : 50,
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'simac'
});


exports.home = function(req, res){
    res.render('home', {
        title: "Sistem Informasi Mesjid Cibiru"
    });
};
exports.signup = function(req, res, next){
    res.render('sign-up', { title: 'Sign Up | SIMAC' });
}; 
exports.admin = function(req, res, next){
    res.render('admin', { title: 'Login Admin | SIMAC' });
};

exports.homeAdmin = function(req, res, next){
    res.render('homeAdmin', { title: 'Home Admin | SIMAC' });
        con.getConnection(function(error, tempCont){
            if(!!error){
                tempCont.release();
                console.log('Error')
            }else{
                tempCont.query("SELECT * FROM users", function(error, rows, fields){
                    tempCont.release();
                    if(!!error){
                        console.log('error');
                        return;
                    }else{
                        console.log(rows);
                    }
                });
            } 
        });
    };
    
exports.session = function(req, res){
    session = req.session;
    //res.end(JSON.stringify(req.body));
    if(req.body.username == 'ibnuaziz' && req.body.password == 'admin'){
        session.uniqueID = req.body.username;
    }
    res.redirect('/homeAdmin');
};
exports.redirect = function(req, res){
    session = req.session;
    if(session.uniqueID){
        res.redirect('/homeAdmin');
    }else{
        res.end('Who Are You???');
    }
};
exports.notFound = function(req, res){
   res.send("<h1>File Not Found</h1>");
};
exports.listen = function(req, res){
    console.log("This application running at port 3000");
};