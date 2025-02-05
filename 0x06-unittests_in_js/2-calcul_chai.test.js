import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', ()=> {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', ()=>{
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 4.2)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should handle negative numbers', ()=>{
        expect(calculateNumber('SUM' , -1.4, -3.7)).to.equal(-5);
        expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
    });

    it('should handle zero correctly', ()=>{
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      expect(calculateNumber('SUM', 0, 3.7)).to.equal(4);;
      expect(calculateNumber('SUM', -0.2, -0.7)).to.equal(-1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return 2 when subtracting 1.5 from 4', ()=>{
      expect(calculateNumber('SUBTRACT', 4, 1.5)).to.equal(2);
    });
    it('should return -3 when subtracting 4.5 from 2', ()=>{
      expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    });
    it('should return 4 when subtracting -1.2 from 2.5', ()=>{
      expect(calculateNumber('SUBTRACT', 2.5, -1.2)).to.equal(4);
    });
  
  describe('DIVIDE', ()=> {
    it('should return 3 when dividing by 5.5 by 2.4', () => {
      expect(calculateNumber('DIVIDE', 5.5, 2.4)).to.equal(3);
    })

    it('should return Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 5.5, 0.4)).to.equal('Error');
    })

    it('should return 0.5 when dividing by 2 by 4', () => {
      expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);;
    })

    it('should return -2 when dividing by -9.9 by 4.5', () => {
      expect(calculateNumber('DIVIDE', -9.9, 4.5)).to.equal(-2);;
    })
  })
});


    
});
