
$(document).ready(function() {
  /* global moment */
  // blogContainer holds all of our posts

  // CHANGE THIS vvv
  var recipesContainer = $("#recipes-container");

  var recipes;


  // This function grabs posts from the database and updates the view
  function getRecipes() {
    $.get("/api/recipes", function(data) {
      console.log("Recipes", data);
      recipes = data;
      if (!recipes || !recipes.length) {
       // displayEmpty();
       console.log("placeholder");
      }
      else {
        initializeRows();
      }
    });
  }

  // Getting the initial list of posts
  getRecipes();
  // InitializeRows handles appending all of our constructed post HTML inside
  // blogContainer
  function initializeRows() {
    recipesContainer.empty();
    var recipesToAdd = [];
    for (var i = 0; i < recipes.length; i++) {
      recipesToAdd.push(createNewRow(recipes[i]));
    }
    recipesContainer.append(recipesToAdd);
  }

  // This function constructs a post's HTML

  //DO I NEED TO CHANGE IT FROM POST TO RECIPES?
  function createNewRow(recipes) {
    var newRecipePanel = $("<div>");
    newRecipePanel.addClass("panel panel-default");

    var newRecipePanelHeading = $("<div>");
    newRecipePanelHeading.addClass("panel-heading");

    var newRecipeName = $("<h2>");

    var newRecipePanelBody = $("<div>");
    newRecipePanelBody.addClass("panel-body");

    var newRecipeIngredients = $("<p>");
    var newRecipeDirections = $("<p>");
    newRecipeName.text(recipes.name + " ");
    newRecipeIngredients.text(recipes.ingredients + " ");
    newRecipeDirections.text(recipes.directions + " ");

    newRecipePanelHeading.append(newRecipeName);
    newRecipePanelBody.append(newRecipeIngredients);
    newRecipePanelBody.append(newRecipeDirections);
    newRecipePanel.append(newRecipePanelHeading);
    newRecipePanel.append(newRecipePanelBody);
    newRecipePanel.data("recipes", recipes);
    return newRecipePanel;
  }


$("#cms").on("submit", function(event){
  event.preventDefault();
  var title = $("#meal_name").val();
  var ingredients = $("#ingredients").val();
  var directions = $("#directions").val();

  var data = { 
    name: title,
    ingredients: ingredients,
    directions: directions
  };

  $.post("/api/recipes", data, function(response) {
    console.log(response);
  });
});

});

