// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require("cors")
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');
const recipesRouter = require("./routes/recipes");
const postsRouter = require("./routes/posts.route");
// const authRouter = require('./routes/auth.route');
// const userAuthRouter = require('./routes/user.auth.route');
const multer = require('multer');
const path = require('path');
require('dotenv').config({path:'../.env'})

//const helpers = require('./helpers');
// we will put some server logic here later...
// export the express app we created to make it available to other modules


app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use("/recipes", recipesRouter);
app.use('/user', userRouter);
app.use('/post', postsRouter);

require('./routes/auth.route')(app);
require('./routes/user.auth.route')(app);

// app.use('/user', authRouter);
// app.use('/post', userAuthRouter);
// app.use('/users', require('./routes/users'));

app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

//Mongoose stuff 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@recipecentral.zmgix.mongodb.net/RecipeCentral?retryWrites=true&w=majority`
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

//auth stuff with mongoose
mongoose.Promise = global.Promise;

// // log connection success or error
// const dbConnection = mongoose.connection
// dbConnection.on('error', (err) => console.log(`Connection error ${err}`))
// dbConnection.once('open', () => console.log('Connected to database'))

//auth
const database = require("./db");
const db = database.db;
const Role = db.role;

db.mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

//storage type
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads/');
  },

  // By default, multer removes file extensions so add them back
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

//middleware function
const upload = multer({storage: storage})

//upload.array('images', 10)
//https://medium.com/lucideus-engineering/file-uploads-with-multer-the-complete-guide-aefe5d2f6026
app.post("/upload-recipe", upload.single('img'), (req, res, next) => {
    console.log(req.file);
    const data = {
        recipe_data: {
          title: req.body.title,
          author: req.body.author,
          text: req.body.text,
          images: req.body.images, //nothing happens here
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
      const files = req.body.files;
      let index, len;

      // Loop through all the uploaded images and display them on frontend
      for (index = 0, len = files.length; index < len; ++index) {
          result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
      }
      
      res.send(result);
  });
});
app.post('/PostNewRecipe', (req, res) => {
      const Recipe = new Entry({
          title: req.body.title,
          ingredients: req.body.entry,
          cuisine: req.body.cuisine,
          difficulty: req.body.difficulty,
          instructions: req.body.instructions
      });
      Recipe.save((err,result) => {
          if(err !== null){
              console.log(err);
              console.log(result);
              res.redirect('/home');
          }
          else{
              res.redirect('/home');
          }
      });
  
});
app.get("/", (req, res) => {
    res.send({ message: "We did it!" })
  })

  module.exports = app
