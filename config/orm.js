// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "users";

var orm = {

    // Here our ORM is creating a simple method for performing a query of the entire table.
    // We make use of the callback to ensure that data is returned only once the query is done.
    getUser: function (callback) {
        var s = "SELECT * FROM " + tableName;

        connection.query(s, function (err, result) {

            callback(result);

        });
    },

    // Here our ORM is creating a simple method for performing a query of a single character in the table.
    // Again, we make use of the callback to grab a specific character from the database.

    deleteUser: function (id, callback) {

        var s = "DELETE FROM " + tableName + " WHERE id=?";

        connection.query(s, [id], function (err, result) {

            callback(result);
        });

    },

    addUser: function (user, callback) {
        var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
        user.complete = user.complete || 0;
        connection.query(s, [
            user.text, user.complete
        ], function (err, result) {

            callback(result);

        });
    },

    editUser: function (user, callback) {
        var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

        connection.query(s, [
            user.text, user.id
        ], function (err, result) {

            callback(result);

        });
    }

};

module.exports = orm;
