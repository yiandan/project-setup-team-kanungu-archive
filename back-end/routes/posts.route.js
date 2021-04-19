const router = require('express').Router();
const e = require('express');
let db = require('../db');
let Recipe = db.Recipe;
const User = db.User;



router.route('/:slug').get((req, res) => {
    Recipe.findOne({slug: req.params.slug})
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/all').get((req, res) => {
    Recipe.find()
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/post').post(async(req, res) => {
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

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
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