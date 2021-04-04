// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require("cors")
const bodyParser = require("body-parser");
const logger = require("morgan");
const recipesRouter = require("./routes/recipes");
// we will put some server logic here later...
// export the express app we created to make it available to other modules

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/recipes", recipesRouter);


app.get("/", (req, res) => {
    res.send({ message: "We did it!" })
  })

  module.exports = app
