const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('calculateNumber', ()=> {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', ()=>{
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1, 4.2), 5);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should handle negative numbers', ()=>{
        assert.strictEqual(calculateNumber('SUM' , -1.4, -3.7), -5);
        assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5)
    });

    it('should handle zero correctly', ()=>{
        assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        assert.strictEqual(calculateNumber('SUM', 0, 3.7), 4);
        assert.strictEqual(calculateNumber('SUM', -0.2, -0.7), -1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return 2 when subtracting 1.5 from 4', ()=>{
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 1.5), 2);
    });
    it('should return -3 when subtracting 4.5 from 2', ()=>{
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 4.5), -3);
    });
    it('should return 4 when subtracting -1.2 from 2.5', ()=>{
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, -1.2), 4);
    });
  
  describe('DIVIDE', ()=> {
    it('should return 3 when dividing by 5.5 by 2.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.4), 3);
    })

    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 0.4), 'Error');
    })

    it('should return 0.5 when dividing by 2 by 4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 4), 0.5);
    })

    it('should return -2 when dividing by -9.9 by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9.9, 4.5), -2);
    })
  })
});


    
});
