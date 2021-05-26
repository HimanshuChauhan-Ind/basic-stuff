const mocha = require('mocha')
const chai = require('chai')
const {totalFare,rates} = require('../fareUtils')

const expect = chai.expect;

describe('fareUtils',()=>{
    it('Should return Rs.100 for 10km and 0 min', ()=>{
        let fare = totalFare(10,0);
        expect(fare).to.equal(100);
    })
    it('should return Rs.50 for 0 km and 0 min',()=>{
        let fare = totalFare(0,0);
        expect(fare).to.equal(50)
    })
    it('Should return Rs.110 for 10m and 20 min',()=>{
        let fare = totalFare(10,20);
        expect(fare).to.equal(110)
    })
})
