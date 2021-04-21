const mongoose = require('mongoose')
const URLSlugs = require('mongoose-url-slugs')

// user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique:true},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String, required: false },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    profileImage: { type: String, required: true },
    text:{type:String}
    
})
userSchema.plugin(URLSlugs('username', { field: 'slug' }))
// recipe schema
const recipeSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    images: { type: [String], required: true },
    posted: { type: Date, required: true },
    cuisine: {type: String, required:true},
    difficulty: {type: String, required:true},
    ingredients: [String],
    instructions: [String],
    likes: { type: Number, required: true },
    comments:[{type: mongoose.Schema.Types.ObjectId,ref: 'Comment'}]
   
})
const commentSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    text: {type: String,required:true},
    posted: {type:Date, required:true}
})

recipeSchema.plugin(URLSlugs('author.username title', { field: 'slug' }))

module.exports = {
    User:  mongoose.model('User',userSchema),
    Recipe: mongoose.model('Recipe',recipeSchema),
    Comment: mongoose.model('Comment',commentSchema)
}