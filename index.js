const express = require("express")
const path = require("path")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3004;


const reservations ={
    tables: [],
    waitlist: []
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", (req, res) => {
    // res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", (req, res) => {
    // res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tables", (req, res) => {
    res.json(reservations.tables);
});

app.get("/api/waitlist", (req, res) => {
    res.json(reservations.waitlist);
});

// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });

// Create New Tables - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    if (tables.length <= 5){
        reservations.tables.push(newTable);
    } else {
        reservations.waitlist.push(newTable);
    }

    res.json(newTable);
  });

app.listen(PORT, function(){
    console.log("listening on port" + PORT);
});