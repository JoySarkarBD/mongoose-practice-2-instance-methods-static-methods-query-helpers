// dependencies
const express = require("express");
const dbConnection = require("./db");
const User = require("./models/Users");

// app initialization
const app = express();

app.get("/", async (req, res) => {
    const user = await new User().getAll(2);
    // doc.save();
    res.send(user);
});

/* const doc = new User({
    name: "Joy Sarkar",
    email: "joysarkar490@yahoo.com",
    password:"123"
}); */

// listing to port 3000
app.listen(3000, () => {
    dbConnection()
    console.log("server running at 3000 port.");
});