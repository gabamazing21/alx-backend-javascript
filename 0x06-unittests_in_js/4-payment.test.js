const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;
  let calculateNumberStub;

  beforeEach(() => {
    // Stub  Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on Utils.calculateNumber before each test
    calculateNumberSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    calculateNumberStub.restore();
    calculateNumberSpy.restore();
  });

  it('should stub Utils.calculateNumber and log 10', () => {
    // call the function under test
    const result = sendPaymentRequestToApi(100, 20);

    // verify the spy was called correctly
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify the result is based on the stub's on the stub's return value
    expect(calculateNumberSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
 
});