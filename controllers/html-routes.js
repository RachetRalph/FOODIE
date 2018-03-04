// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/recipy", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/recipy.html"));
    });

    // blog route loads buttons.html
    app.get("/buttons", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/buttons.html"));
    });

    app.get("/recipy", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/recipy.html"));
    });

};
