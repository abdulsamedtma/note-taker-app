// Dependencies required for the app
const path = require("path");

// Routing for the app
module.exports = function (app) {

    // creating routes for the app
    // GET / notes - Should return the notes.html file.
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // GET should return the index.html file
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
    