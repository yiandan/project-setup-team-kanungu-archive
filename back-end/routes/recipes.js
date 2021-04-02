const express = require("express");
const router = express.Router();

let recipes = require("../dummyDatabase");

router.get("/list", async (req, res) => {
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
    let { id } = req.params;
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

  module.exports = router;