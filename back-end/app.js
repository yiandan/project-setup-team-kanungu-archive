// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require("cors")
const bodyParser = require("body-parser");
const morgan = require("morgan");
const recipesRouter = require("./routes/recipes");
const multer = require('multer');
const path = require('path');
//const helpers = require('./helpers');
// we will put some server logic here later...
// export the express app we created to make it available to other modules

app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/recipes", recipesRouter);

app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

//check what type is file
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'text/plain') { // checking the MIME type of the uploaded file
        cb(null, true);
    } else {
        cb(null, false);
    }
}

//storage type
const storage = multer.memoryStorage();

const upload = multer({
    fileFilter,
    storage
});

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, 'uploads/');
//   },

//   // By default, multer removes file extensions so add them back
//   filename: function(req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

//https://medium.com/lucideus-engineering/file-uploads-with-multer-the-complete-guide-aefe5d2f6026
app.post("/upload-recipe", upload.array('images', 10), (req, res, next) => {
    console.log(req.images);
    const data = {
        recipe_data: {
          title: req.body.title,
          author: req.body.author,
          text: req.body.text,
          images: req.txt,
        },
      }
    
    // // now do something amazing with the data we received from the client
    // if (!req.body.images) {
    //     // failure!
    //     const error = new Error("Please upload some files!")
    //     error.httpStatusCode = 400
    //     return next(error)
    //   } else {
    //     // success
    //     // send a message back to the client, for example, a simple JSON object
    //     const data = {
    //         recipe_data: {
    //           title: req.body.title,
    //           author: req.body.author,
    //           text: req.body.text,
    //           images: req.body.images,
    //         },
    //       }

    //     // ... then send a response of some kind to client
    //     res.json(data)
    //   }
      res.json(data)
  })

app.post('/upload-multiple-images', (req, res) => {
  // 'profile_pic' is the name of our file input field in the HTML form
  //let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).array('multiple_images', 10);
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
