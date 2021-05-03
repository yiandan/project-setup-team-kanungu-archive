const chai=require('chai');
const chaiHTTP= require('chai-http');
const {expect}=chai;
chai.use(chaiHTTP);
const recipe= ('../routes/recipes.js')

describe('Testing for GET router.get(/list/ingredient/easy/flour', () => {
    it('should return 200 OK status', () => {
    return chai.request(recipe).get('/list/ingredient/easy/flour').then((response) => {
        expect(response.status).to.equal(200)
      })
    })

    it('should return data as an array ', () => {
        return chai.request(app).get('/list/ingredient/easy/flour').then((response) => {
            expect(response.body).to.have.property('data').that.is.an('array');
        })
    }).timeout(3000)
 /*
    it('should return recipes with the correct field types', () => {
        return chai.request(app).get('/list/ingredient/easy/flour').then((response) => {
            expect((response.body)[0]).to.have.property('title').that.is.a('string')
            expect((response.body)[0]).to.have.property('ingredients').that.is.an('array')
        })
    }).timeout(8000)

*/
})