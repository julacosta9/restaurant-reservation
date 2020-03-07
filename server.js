// Dependencies
const express = require('express');
const path = require('path');
const Customer = require('./customer')
// Set express app
const app = express();
const PORT = 3002;

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

app.post("/reserve", function(req, res) {
    const newCustomer = req.body
    console.log(req.body)
    if (reservations.length >= 5) {
        const customer = new Customer(newCustomer.name, newCustomer.phone, newCustomer.email, newCustomer.id, false);
        waitList.push(customer);
        res.status(200).send(customer);
        
    } else {
        const customer = new Customer(newCustomer.name, newCustomer.phone, newCustomer.email, newCustomer.id, true);
        reservations.push(customer);
        res.status(200).send(customer);
    } 
    res.json(reservations);
    
});

// Turning on server
app.listen(PORT, () => {
    console.log("App listening to port " + PORT)
});