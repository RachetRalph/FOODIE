//Search Recipes by Ingredient Endpoint
var SPOONACULAR_SEARCH_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?mashape-key=YHtfYNnkUHmshTkM9P4Z15rzjtfVp1WeUAljsnbEP36q8NXmfW';
//Search Recipe Summary by Recipe ID Endpoint
var SPOONACULAR_DESCRIPTIONS_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/summary?mashape-key=YHtfYNnkUHmshTkM9P4Z15rzjtfVp1WeUAljsnbEP36q8NXmfW';

//getting the recipes based on the user's ingredients
const getDataFromApi = function (searchTerm, callback) {
    var query = {
        fillIngredients: false,
        ingredients: searchTerm,
        limitLicense: true,
        number: 6,
        ranking: 1
    };
    $.getJSON(SPOONACULAR_SEARCH_URL, query, callback);
};

//getting the summaries based on the recipe ID
const getSummaryFromApi = function (searchTerm) {
    var query = SPOONACULAR_DESCRIPTIONS_URL.replace('{id}', searchTerm);
    $.getJSON(query, function (data) {
        var rawSummary = data.summary;
        var newSummary = rawSummary.slice(0, 200);
        $('#' + data.id + ' .recipe-desc').html(newSummary + '...');
    });
};
//getJSON callback function
const testCallback = function (data) {
    for (var i = 0; i < data.length; i++) {
        //defining variables for ease of use
        var RECIPE_JSON_ID = data[i].id;
        var RECIPE_JSON_IMAGE = data[i].image;
        var RECIPE_JSON_TITLE = data[i].title;
        var RECIPE_JSON_MISSED = data[i].missedIngredientCount;
        var RECIPE_JSON_USED = data[i].usedIngredientCount;
        //the template for recipe cards, with the data variables included.
        var RESULT_RECIPE_TEMPLATE = (
            '<figure class="recipe-card" id="' + RECIPE_JSON_ID + '" role="recipe card">' + //added id to tile
            '<a href= https://spoonacular.com/recipe/-' + RECIPE_JSON_ID + ' class="recipe-link" target="_blank">' +
            '<h2 class="recipe-title">' + RECIPE_JSON_TITLE + '</h2>' +
            '<img src=' + RECIPE_JSON_IMAGE + ' alt="Recipe image" class="recipe-image"/>' +
            '<figcaption class="recipe-description">' +
            '<p class="recipe-supplies">' + changeRecipeSupplies(RECIPE_JSON_USED, RECIPE_JSON_MISSED) + '</p>' +
            '<p class="recipe-desc"></p>' +
            '</figcaption>' +
            '</a>' +
            '</figure>'
        );
        //display the recipe tiles using the template
        displayRecipeTiles(RESULT_RECIPE_TEMPLATE);
        //display the summaries based off the recipe ID's within the loop.
        getSummaryFromApi(data[i].id);
    }
};

//shows the number of supplies you have against the number of supplies you need.
const changeRecipeSupplies = function (data1, data2) {
    console.log(data2);
    console.log(data1 + '/' + (data1 + data2));
    var missingIngredients = data1 + ' of ' + (data1 + data2) + ' ingredients!';
    return missingIngredients;
};

//adds the recipe tiles to the empty div on the main page
const displayRecipeTiles = function (template) {
    $('#results').append(template);
};

//takes the user's search and uses it to call the API
const submitUserData = function () {
    $('#ingredients-form').on('submit', function (event) {
        event.preventDefault();
        $('#results').empty();
        //this moves the header from the middle of the screen to the top
        $("header").removeClass("middle");
        var $userData = $('input[type=text]').val();
        //this replaces spaces with , so that each ingredient the user searches will become a separate item in an array.
        var $newUserData = $userData.replace(' ', ',');
        getDataFromApi($newUserData, testCallback);
        $("input[type=text]").val('');
    });
};

submitUserData();

