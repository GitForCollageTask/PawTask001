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

con.end(function(err){
	if(err){
		console.log('connection disconnect erro!!');
	}
});