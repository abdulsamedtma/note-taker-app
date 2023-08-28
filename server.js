// Dependencies required for the app
const express = require("express");
const path = require("path");

// Sets up the Express App
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 3000;

// Use express to create a route for each file in the public folder and give it a '/' path
app.use(express.static("public"));

// Sets up the Express app to handle data parsing, middleware created by req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require the routes created in the routes folder
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, () =>  {
    console.log(`Server is running on port ${PORT}`);
     
}); 


