// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require("cors")
const bodyParser = require("body-parser");
const logger = require("morgan");
const recipesRouter = require("./routes/recipes");
const multer = require('multer');
const path = require('path');
const helpers = require('./helpers');
// we will put some server logic here later...
// export the express app we created to make it available to other modules

app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/recipes", recipesRouter);

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
  },

  // By default, multer removes file extensions so add them back
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});



app.post('/upload-multiple-images', (req, res) => {
  // 'profile_pic' is the name of our file input field in the HTML form
  let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).array('multiple_images', 10);

  upload(req, res, function(err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any

      if (req.fileValidationError) {
          return res.send(req.fileValidationError);
      }
      else if (!req.file) {
          return res.send('Please select an image to upload');
      }
      else if (err instanceof multer.MulterError) {
          return res.send(err);
      }
      else if (err) {
          return res.send(err);
      }

      let result = "You have uploaded these images: <hr />";
      const files = req.files;
      let index, len;

      // Loop through all the uploaded images and display them on frontend
      for (index = 0, len = files.length; index < len; ++index) {
          result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
      }
      
      res.send(result);
  });
});

app.get("/", (req, res) => {
    res.send({ message: "We did it!" })
  })

  module.exports = app
