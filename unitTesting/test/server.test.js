const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const server = require('../server');

const { expect } = require('chai');
chai.use(chaiHttp)

describe('API testing',()=>{

    it('API is connected Correctly',()=>{
            chai.request(server)
                .get('/rates')
                .end((err,response)=>{
                    expect(err).to.be.null;
                    expect(response).to.be.a('Object')
                })
    })

    it('API is fetching data Correctly',()=>{
        chai.request(server)
            .get('/rates')
            .end((err,response)=>{
                expect(err).to.be.null;
                expect(response).to.be.a('Object')
                expect(response.fixed).to.equal(50)
            })
    })

})
