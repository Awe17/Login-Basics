require('dotenv').config();
const express = require('express');
const app = express(); //Initialise express app
const port = process.env.PORT;
const authRouter = require('./routes/authRoutes');


//middleware
app.use(express.json());
app.use(express.static('public'));

//set view engine
app.set('view engine','ejs');

// routes
app.use(authRouter);

//Listen for requests
app.listen(port,()=>console.log(`listening for requests on port ${port}...`));