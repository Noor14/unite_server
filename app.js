const express = require('express');
const mongoose = require ('mongoose');
const dotenv = require('dotenv');
const app = express();

// Import Route
const authRoute = require('./routes/auth');

dotenv.config();
//Connect to DB
mongoose.connect(process.env.DB_CONNECT, 
{useUnifiedTopology: true,useNewUrlParser:true},
()=>{console.log('connected to db')});

// Middleware
app.use(express.json());

// Route Middleware 
app.use('/api/user', authRoute);
app.listen(3000, ()=> console.log('server is up with on 3000 port'))