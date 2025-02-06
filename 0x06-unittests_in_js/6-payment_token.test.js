const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with ', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal(
        {data: 'Successful response from the API' }
      );
      done();
    }).catch((err) => done (err)); // Pass error to done if promise rejects
  });
});