var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	port:3306,
	database:'simac'
});

con.connect(function (err){
	if(err){
		console.log('Error Connection');
		return;
	}
	console.log('Connected!!');
});


		/*var data = {
			id_masjid : 003,
			nama_lengkap : 'Ibnu Aziz Nu',
			email : 'ibnuazizn@gmail.com',
			username : 'ibnuazizn',
			password : 'ibnuaziz',
			no_telpon : 089765456897
		};

		con.query('INSERT INTO users set ?', data, function(err, result){
			if(err){
				console.log(err);
				return;
				//res.redirect('/login');
			}
				console.log("Succesfully insert : ", result);
		});

		con.query('SELECT * FROM users', function(err, rows){
			if(err){
				console.log(err);
				return;
			}
			console.log(rows);
		});
		*/