const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const app = express();

const usersRoute = require('./routes/api/userRoutes');

//Set up our origin headers
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

// Security and body parser middleware
app.use(helmet());
app.use(morgan('tiny'));
app.use(mongoSanitize());
app.use(express.json({ limit: '15kb' }));

// Mount Routers
app.use('/api/users', usersRoute)

// ROOT
app.get('/', (req,res) => {
    res.json({message: 'hello'})
})

// 404
app.all('*', (req, res, next) => {
    next();
})

module.exports = app;