const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Testing /api/convert route', function() {

    test("10L should return valid object", function(){
        chai.request(server)
            .get('/api/convert')
            .query({ input: '10L' })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.initNum, 10);
                assert.equal(res.body.initUnit, 'L');
                assert.approximately(res.body.returnNum, 2.64172, 0.1);
                assert.equal(res.body.returnUnit, 'gal');
            }
        );
    })

    test("32g should return return invalid input unit", function(){
        chai.request(server)
            .get('/api/convert')
            .query({ input: '32g' })
            .end(function(err, res) {
                assert.equal(res.text, 'invalid unit');
            }
        );
    })

    test("3/7.2/4kg should return invalid number.", function(){
        chai.request(server)
            .get('/api/convert')
            .query({ input: '3/7.2/4kg' })
            .end(function(err, res) {
                assert.equal(res.text, 'invalid number');
            }
        );
    })

    test("3/7.2/4kilomegagram should return invalid number and unit.", function(){
        chai.request(server)
            .get('/api/convert')
            .query({ input: '3/7.2/4kilomegagram' })
            .end(function(err, res) {
                assert.equal(res.text, 'invalid number and unit');
            }
        );
    })

    test("kg should return a valid return object with the initNum being read as 1", function(){
        chai.request(server)
            .get('/api/convert')
            .query({ input: 'kg' })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.initNum, 1);
                assert.equal(res.body.initUnit, 'kg');
                assert.approximately(res.body.returnNum, 2.20462, 0.1);
                assert.equal(res.body.returnUnit, 'lbs');
            });
    })
});
