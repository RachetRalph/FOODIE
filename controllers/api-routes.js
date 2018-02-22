

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({})
    .then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });


  // POST route for saving a new post
  app.post("/api/recipes", function(req, res) {
     console.log(req.body);
    db.Recipes.create({
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    })
    .then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });



  // PUT route for updating posts
  app.put("/api/recipes", function(req, res) {
    db.Recipes.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });
};