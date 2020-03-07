// Dependencies
const express = require('express');
const path = require('path');
const customer = require('./customer')
// Set express app
const app = express();
const PORT = 3000;

// Set express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up file paths.
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

// arrays for api's
const reservations = [];

const waitList = []



// Turning on server
app.listen(PORT, () => {
    console.log("App listening to port " + PORT)
});