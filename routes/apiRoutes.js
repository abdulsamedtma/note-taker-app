// Dependencies required for the app
const path = require("path");
const fs = require("fs");
const db = require("../db/db.json");

// Routing for the app
module.exports = function (app) {

    // GET/api/notes - Should read the db.json file and return all saved notes as JSON.
    app.get("/api/notes", function(req, res) {
        let db = fs.readFileSync("./db/db.json", "utf8");
        db = JSON.parse(db);
        res.json(db);
    });

    // POST/api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    app.post("/api/notes", function(req, res) {
       let db = fs.readFileSync("./db/db.json", "utf8");
         db = JSON.parse(db);
         //res.json(db);
         // create a new note
         let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: Math.random().toString(36)
            };
            //push the new note to the db.json file
         db.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(db));
        res.json(newNote);
});
 // DELETE/api/notes/:id - Should receive a query parameter containing the id of a note to delete.
 app.delete("/api/notes/:id", function(req, res) {
    // reading the notes from db.json file
    let db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    // removing the note with the id from the db.json file

    let deleteNote = db.filter(note => note.id!= req.params.id
    );
    // writing the notes to the db.json file
    fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
    res.json("success");
});
};