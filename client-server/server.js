// Importing Modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Define Global Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration
app.use(morgan('dev'));
app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false }));

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

app.use(express.static('../frontend/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/', 'build', 'index.html')); // relative path
});

app.listen(PORT, () => {
    console.log(`Server is starting at PORT: ${PORT}`);
});
