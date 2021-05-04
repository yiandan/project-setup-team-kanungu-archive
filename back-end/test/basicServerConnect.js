const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
chai.use(chaiHttp)

const app = require("../app")

describe("Access Recipes" , () => {
  it("should return status 200", async () => {
    let res = await chai
      .request(app)
      .get("/post")
      .send()

    expect(res.status).to.equal(200)
    //expect((res[1]).to.have.property('images').that.is.a('string'))
  })
})
describe("Access a specific recipe" , () => {
  it("should return status 200", async () => {
    let res = await chai
      .request(app)
      .get("/post/607cd8046dced78cc134dffe")
      .send()

    expect(res.status).to.equal(200)
    //expect((res[1]).to.have.property('images').that.is.a('string'))
  })
})

describe("Access Users" , () => {
  it("should return status 200", async () => {
    let res = await chai
      .request(app)
      .get("/user")
      .send()
    expect(res.status).to.equal(200)
    //expect((res[1]).to.have.property('images').that.is.a('string'))
  })
})

describe("Access a specific user" , () => {
  it("should return status 200", async () => {
    let res = await chai
      .request(app)

      .get("/user/607c9b35c463426a0e56e31b")
      .send()

    expect(res.status).to.equal(200)
    //expect((res[1]).to.have.property('images').that.is.a('string'))
  })
})


