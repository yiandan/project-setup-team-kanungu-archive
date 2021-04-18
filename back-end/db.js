const mongoose = require('mongoose')


// user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true }
    
})

// recipe schema

const User = mongoose.model('User',userSchema)

module.exports = User;