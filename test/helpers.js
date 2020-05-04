const chai = require('chai');
const chaiHttp = require('chai-http');
const nock = require('nock');
const supertest = require('supertest');
const http = require('../src/http');

const should = chai.should();
const request = supertest(http);
const { expect } = chai;

chai.use(chaiHttp);

module.exports = {
  chai, should, request, expect, nock,
};
