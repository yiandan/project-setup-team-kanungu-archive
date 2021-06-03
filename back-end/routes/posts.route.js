const router = require('express').Router();
const e = require('express');
const mongoose = require('mongoose')
let db = require('../db');
let Recipe = db.Recipe;
const User = db.User;
const Comment = db.Comment;
const { body, validationResult } = require('express-validator');


router.route('/:id').get((req, res) => {
    Recipe.findById(req.params.id)
    .populate('author')
    .populate({
        path:'comments',
        populate:{
            path:'by',
            model:'User',
            select:['username']
        }
    })
    
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/').get((req, res) => {
    Recipe.find()
    .populate("author")
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/PostNewRecipe').post(async(req, res) => {
  const user = await User.findById(req.body._id);

   const newRecipe =new Recipe({
       title: req.body.title,
       author: user,
       images: req.body.images,
       difficulty: req.body.difficulty,
       ingredients: req.body.ingredients,
       posted:req.body.posted,
       cuisine:req.body.cuisine,
       instructions:req.body.instructions,
       likes:req.body.likes



   });
 
        const savedRecipe =  newRecipe.save(async function(err,recipe){
            if(err){
                res.status(400).json('Error'+err)
                
            }
            else{
                await user.posts.push(newRecipe);
                user.save(function(err,user){
                    if(err){
                        res.status(400).json('Error'+err)
                    }
                    else{
                        res.json('User posts updated!')
                    }
                })

            }
        })
  

    


});
//Get all comments on a specific post 
router.route('/:id/comments').get((req, res) => {
    Recipe.findById(req.params.id)
    .select("comments")
    .populate("comments")
    
        .then(recipe => 
            res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Post comment  to recipe with corresponding id 
router.route('/:id/comment',body('text').isLength({min:4,max:50})).post((req, res) => {
    console.log(req.body._id)
    User.findById(mongoose.Types.ObjectId(req.body._id)).then(user=>{
        Recipe.findById(mongoose.Types.ObjectId(req.params.id))
        .then(recipe => {
            const newComment = new Comment({
                author: user,
                text: req.body.text, 
                posted: req.body.date
            })
            const errors = validationResult(req);
            if(! errors.isEmpty()){
                return res.status(400).json({ errors: errors.array() })
            }
            newComment.save()
            .then( recipe.comments.push(newComment))
            .then(recipe.save())
           
            .then(()=>res.json("Comment posted!"))
            .catch(err =>res.status(400).json('error:'+ err))
        })
        .catch(err => res.status(400).json('Error'+ err))
    })
    .catch(err => res.status(400).json('Error'+err))
   
            
   
});
//Like post w/ corresponding id 

router.route('/:id/like').put((req,res) =>{
   
    update = {likes:req.body.likes}
if(req.body.met == "del")
    return next('route');
 Recipe.findOneAndUpdate({_id :req.params.id},update).then(recipe =>{
     User.findOneAndUpdate({_id:req.body._id},{$addToSet:{likedPosts:recipe._id}})
     .then(user =>{
        
     })
 })

 
.then(()=>res.json("post liked!"))
.catch(err => res.status(400).json(err))

});

router.route('/:id/like').put((req,res,next) =>{
   console.log("HIT")
    update = {likes:req.body.likes}

 Recipe.findOneAndUpdate({_id :req.params.id},update).then(recipe =>{
    
     User.findOneAndUpdate({_id:req.body._id},{$pull:{likedPosts:recipe._id}}).then(user=>{
    
     })
 })

 
 .then(()=>res.json("post liked!"))
 .catch(err => res.status(400).json(err))

});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;