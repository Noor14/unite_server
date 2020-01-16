const express = require('express');
const mongoose = require ('mongoose');
const app = express();

//Connect to DB

// Import Route
const authRoute = require('./routes/auth');

// Route Middleware 
app.use('api/user', authRoute);

app.listen(3000, ()=> console.log('server is up with on 3000 port'))