var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var mysql = require('mysql');
var supertest = require('supertest');
var should = require('should');
var app = require('../app').homeAdmin;

var server = supertest.agent("http://localhost:3000");
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'simac'
});
describe("Unit Testing Using Mocha",function(){

  it('Should succes connected', function(){
           expect(typeof(con)=='object').to.be.true;
        });

	it("Should access home page",function(done){
   server
    .get("/")
    .expect(200)
    .expect("Content-type",/Sistem Informasi Mesjid Cibiru/)
    .end(function(error,res){
      res.status.should.equal(200);
      res.body.error.should.equal(true);
    });
    done();
  });

  
  it("Should Access error page",function(){
    server
     expect(404).to.be.a('number');
  });

    it("Should access home admin page",function(done){
    server
    .get("/homeAdmin")
    .expect("Content-type",/Home Admin | SIMAC/)
    .expect(200)
    .end(function(error,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
    });
     done();
  });


});