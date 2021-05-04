
let db = require("../db");
console.log(db)
require('../app')
const User = db.User;
console.log(User)
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
exports.userBoard = (req, res) => {
    User.findById(req.userId)
    
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};  