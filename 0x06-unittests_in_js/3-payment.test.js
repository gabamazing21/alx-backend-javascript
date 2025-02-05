const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    // Spy on Utils.calculateNumber before each test
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the spy after each test
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    // call the function under test
    sendPaymentRequestToApi(100, 20);

    // verify the spy was called correctly
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});