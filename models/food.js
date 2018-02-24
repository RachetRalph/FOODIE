module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    directions: DataTypes.STRING
  });
  return Recipes;
};