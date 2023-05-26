const express = require('express');
const { foodData } = require('./data');

// creating a web server

const app = express();

// Routes

app.get('/health-api', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    const response = {
        time: currentTime,
        app: "express-server",
        status: "active"
    };
    res.json(response);
});

// Route: /all
app.get('/all', (req, res) => {
    res.json(foodData);
});

// Route: /vegetable
app.get('/vegetable', (req, res) => {
    const vegetables = foodData.filter(food => food.category === 'Vegetable');
    res.json(vegetables);
});

// Route: /fruit
app.get('/fruit', (req, res) => {
    const fruits = foodData.filter(food => food.category === 'Fruit');
    res.json(fruits);
});

// Route: /protein
app.get('/protein', (req, res) => {
    const proteins = foodData.filter(food => food.category === 'Protein');
    res.json(proteins);
});

// Route: /calorie-above-100
app.get('/calorie-above-100', (req, res) => {
    const above100Calories = foodData.filter(food => food.calorie > 100);
    res.json(above100Calories);
});

// Route: /calorie-below-100
app.get('/calorie-below-100', (req, res) => {
    const below100Calories = foodData.filter(food => food.calorie < 100);
    res.json(below100Calories);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

