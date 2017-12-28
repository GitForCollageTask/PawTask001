var express = require('express');
//var router = express.Router();
var mysql = require('mysql');
var app = express();
//var json = require('res-json');
var session = require('express-session');


//connection
    connection = mysql.createPool({
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

exports.add = function(req, res){
  res.render('add_customer',{page_title:"Add Customers - Node.js"});
};

exports.signup = function(req, res){
    res.render('sign-up', { title: 'Sign Up | SIMAC' });

};

exports.save = function(req, res){
     var input = JSON.parse(JSON.stringify(req.body));
    connection.getConnection(function (error, connection) {
        if(this.error){
            this.error.release();
            console.log(error);
        }else{
            var data = {
            
            id_masjid    : input.id_masjid,
            nama_lengkap : input.nama_lengkap,
            email        : input.email,
            username     : input.username,
            password     : input.password,
            no_telpon    : input.no_telpon 
        };
            console.log("Connected!!");
         var query = connection.query("INSERT INTO users set ? ",data, function(err, rows){
            connection.release();
            if (err)
              console.log(err);
         
             res.redirect('/sign-up/add');
        });
      };
   });
};
        
exports.admin = function(req, res, next){
    res.render('admin', { title: 'Login Admin | SIMAC' });
};

exports.homeAdmin = function(req, res){
    
        connection.getConnection(function(error, connection){
                if(!!error){
                    connection.release();
                    console.log(error);
                }else{
                    console.log("Connected!!");
                    connection.query("SELECT * FROM users", function(error, rows, fields){
                    connection.release();
                    if(!!error){
                        console.log(error);
                    }else{
                         res.render('homeAdmin', { title: 'Home Admin | SIMAC', data:rows });
                    }
                });
                    
            }; 
        }); 
    };
    
exports.session = function(req, res){
    session = req.session;
    //res.end(JSON.stringify(req.body));
    if(req.body.username == 'ibnuazizn' && req.body.password == 'admin'){
        session.uniqueID = req.body.username;
    }
    res.redirect('/redirects');
};
exports.redirects = function(req, res){
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
