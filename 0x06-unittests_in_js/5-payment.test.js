const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;


  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log')
  });

  afterEach(() => {
    consoleSpy.restore();
  })

  it('sendpaymentrequestapi with 100, 20 and log 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('sendpaymentrequestapi with 10, 10 and to log 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
})