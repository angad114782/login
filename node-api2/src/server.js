const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDb } = require("./config/db");

const app = express();

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use CORS
app.use(cors());

// Static file serving
app.use(express.static(path.join(__dirname, '..../logintest/frontend')));

// Routes
const authRoutes = require('./routes/auth.routes');
app.use('/api', authRoutes);  // Prefix routes with /api

// Serve the welcome page
app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, '..../logintest/frontend', 'welcome.html'));
});
const PORT=5454;
app.listen(PORT,async ()=>{
    await connectDb()
    console.log("Api listing on port ",PORT);
})