// Importing Modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const clickRoutes = require('./routes/click');

// Define Global Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration
app.use(morgan('dev'));
app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false }));

app.use('/api/click', clickRoutes);

// CORS policy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Origin, X-Requested_with'
    );
    if (req.method === 'OPTIONS') {
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, PATCH , DELETE'
        );
        return this.set.status(200).json({});
    }
    next();
});

// error handling
app.use((error, req, res, next) => {
    // if response was already sent
    if (res.headerSent) return next(error);

    res.status(error.code || 500).json({
        message: error.message || 'An unknown error occured!'
    });
});

// if none of the routes were targeted
// error creation
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;

    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
    next(error);
});


app.listen(PORT, () => {
    console.log(`Server is starting at PORT: ${PORT}`);
});
