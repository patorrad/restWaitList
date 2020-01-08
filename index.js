const express = require("express")

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.get("/tables", (req, res) => {
    // res.json({
    //     name: "spinach",
    //     bestFood: true
    // });
});

app.get("/reserve", (req, res) => {
    // res.json({
    //     name: "spinach",
    //     bestFood: true
    // });
});

app.get("/api/tables", (req, res) => {
    // res.json({
    //     name: "spinach",
    //     bestFood: true
    // });
});

app.get("/api/tables", (req, res) => {
    // res.json({
    //     name: "spinach",
    //     bestFood: true
    // });
});

app.get("/api/waitlist", (req, res) => {
    // res.json({
    //     name: "spinach",
    //     bestFood: true
    // });
});

app.listen(PORT, function(){
    console.log("listening on port" + PORT);
});