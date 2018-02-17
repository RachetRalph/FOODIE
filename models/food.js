module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Food;
};
