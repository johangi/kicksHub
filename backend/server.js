require('dotenv').config();

// app dependencies
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const shoeRoutes = require('./routes/shoe');

// express app
const app = express();
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/shoes', shoeRoutes);

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests on port
        app.listen(process.env.PORT, () => {
            console.log('listening on port ' + process.env.PORT);
        });
    })
    .catch(error => console.log(error));