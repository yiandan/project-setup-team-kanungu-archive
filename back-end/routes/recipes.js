const express = require("express");
const router = express.Router();
let db = require('../db');
let Recipe = db.Recipe;
const User = db.User;

//let recipes = require("../dummyDatabase");

let posts = require("../PostDatabase");

router.get('/posts', async (req, res) => {
    try {
    
      res.status(200).json({
        data: posts
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

router.get('/list', async (req, res) => {
    try {
      res.status(200).json({
        data: recipes
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  
  router.get("/list/:id", async (req, res) => {
    const { id } = req.params;
    id = Number(id);
    try {
      let recipe = recipes.find(recipe => recipe._id === id);
      res.status(200).json({
        data: recipe
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });
  
  router.get("/list/:category/:difficulty/:search", async (req, res) => {
    const { category, difficulty, search } = req.params;
    console.log(search);
    let recipe;
    try {
      //difficulty easy and different categories 
      if (difficulty=== "easy") {
        if (category === "cuisine") {
          //recipe = recipes.filter(recipe => recipe.difficulty=== difficulty && recipe.cuisine.includes(search));
          recipe = await Recipe.find({$and: [{difficulty:'easy'},{cuisine : {$regex : new RegExp(search, "i")}}]});
          console.log(recipe);
        }
        
        else if (category==="ingredient") {
          //recipe = recipes.filter(recipe => recipe.difficulty=== difficulty && recipe.ingredients.includes(search));
          recipe = await Recipe.find({$and: [{difficulty:'easy'},{ingredients : {$regex : new RegExp(search, "i")}}]});
          console.log(recipe);
        }
        
        else if (category==="name") {
          //recipe = recipes.filter(recipe => recipe.difficulty=== difficulty && recipe.name.includes(search));
          recipe = await Recipe.find({$and: [{difficulty:'easy'},{title : {$regex : new RegExp(search, "i")}}]});
          console.log(recipe);
        }
      }
      
      //difficulty intermediate and different categories 
      else if (difficulty=== "intermediate") {
        if (category === "cuisine") {
          //recipe = recipes.filter(recipe => recipe.difficulty=== difficulty && recipe.cuisine.includes(search));
          recipe = await Recipe.find({$and: [{difficulty:'intermediate'},{cuisine : {$regex : new RegExp(search, "i")}}]});
          console.log(recipe);
        }
        
        else if (category==="ingredient") {
          //recipe = recipes.filter(recipe => recipe.difficulty=== difficulty && recipe.ingredients.includes(search));
          recipe = await Recipe.find({$and: [{difficulty:'intermediate'},{ingredients : {$regex : new RegExp(search, "i")}}]});
          console.log(recipe);
        }
        else if (category==="name") {
          //recipe = recipes.filter(recipe => recipe.difficulty=== difficulty && recipe.name.includes(search));
          recipe = await Recipe.find({$and: [{difficulty:'intermediate'},{title : {$regex : new RegExp(search, "i")}}]});
          console.log(recipe);
        }
      }
      //difficulty advanced and different categories 
      else if (difficulty=== "advanced") {
        if (category === "cuisine") {
          //recipe = recipes.filter(recipe => recipe.difficulty=== difficulty && recipe.cuisine.includes(search));
          recipe = await Recipe.find({$and: [{difficulty:'advanced'},{cuisine : {$regex : new RegExp(search, "i")}}]});
          console.log(recipe);
        }
        else if (category==="ingredient") {
          //recipe = recipes.filter(recipe => recipe.difficulty=== difficulty && recipe.ingredients.includes(search));
          recipe = await Recipe.find({$and: [{difficulty:'advanced'},{ingredients : {$regex : new RegExp(search, "i")}}]});
          console.log(recipe);
        }
        else if (category==="name") {
          //recipe = recipes.filter(recipe => recipe.difficulty=== difficulty && recipe.name.includes(search));
          recipe = await Recipe.find({$and: [{difficulty:'advanced'},{title : {$regex : new RegExp(search, "i")}}]});
          console.log(recipe);       
        }
      }
      
      res.status(200).json({
        data: recipe
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  module.exports = router;