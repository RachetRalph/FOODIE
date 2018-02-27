// Grabbing our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/api/recipes/", function (req, res) {
        db.Recipes.findAll({})
            .then(function (dbRecipes) {
                res.json(dbRecipes);
            });
    });


    // POST route for saving a new post
    app.post("/api/recipes", function (req, res) {
        console.log(req.body);
        db.Recipes.create({
            name: req.body.name,
            ingredients: req.body.ingredients,
            directions: req.body.directions
        })
            .then(function (dbRecipes) {
                res.json(dbRecipes);
            });
    });

};