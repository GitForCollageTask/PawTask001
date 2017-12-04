var assert = require('assert');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var mysql = require('mysql');
var request = require('request');
var supertest = require('supertest');
var should = require('should');
var index = require('../routes/index');
var app = require('../app');

chai.use(require('chai-http'));
var server = supertest.agent("http://localhost:3000");

describe("Unit Testing Using Mocha",function(){
 it('GET /',function(){
     server
    .get("/")
    .send({title:'Sistem Informasi Mesjid Cibiru'})
    .end(function(e, res) {
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      expect(res.body).to.equal({});
      expect(res).to.have.status(404);
     });
    });
  });