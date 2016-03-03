const Mocha = require('mocha');
const Chai = require('chai');


//Should hit each of the route end points
//Each should return 200

//WIP
describe('load the ....', function () {
  it('should reply 200', function (done) {
    server.inject({ method: 'GET', url: '/foo', payload:
      }, function (res) {
        expect(res.statusCode).to.equal(200);
        done();
      }
    );
});
