const chai = require('chai');
const expect = chai.expect;

describe('Basic test', function (){

    it('false should be false', function () {
        expect(false).to.be.false;
    });

    it('10 * 10 should be 100', function () {
        expect(10*10).to.equal(100);
    });
})