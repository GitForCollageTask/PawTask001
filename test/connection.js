var assert = require('assert');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var mysql = require('mysql');
var request = require('request');
var supertest = require('supertest');
var should = require('should');
var app = require('../app');

var server = supertest.agent("http://localhost:3000/");

describe("Acces Home Page",function(){
 it('GET /' ,function(done){
     server
    .get("/")
    .send({title:'Sistem Informasi Mesjid Cibiru'})
    .end(function(e, res) {
      res.status.should.equal(200);
      expect(res.body).to.deep.equal({});
      expect(res).to.have.status(404);
      expect(200);
      done();
     });
    });
});
describe("Acces DB",function(){
  it('Should connect without an error', function (done) {
 var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'simac'
});
  connection.getConnection((err, connection) => {
    try {
      expect(connection).to.not.be.null;
      expect({'host':'localhost'}).to.have.property('host'); 
    } catch (error) {
      done(error);
    }
  });
  connection.getConnection(done);
 });
});

