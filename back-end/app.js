// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require("cors")
// we will put some server logic here later...
// export the express app we created to make it available to other modules
module.exports = app

app.use(cors())

app.get("/", (req, res) => {
    res.send({ message: "We did it!" })
  })
