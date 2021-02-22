const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');

const app = express();

const usersRoute = require('./routes/api/userRoutes');
const authRoute = require('./routes/api/authRoutes');
const projectRoute = require('./routes/api/projectRoutes');

// Set up our origin headers
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

// Security and body parser middleware
app.use(helmet());
app.use(morgan('tiny'));
app.use(mongoSanitize());
app.use(express.json({ limit: '15kb' }));

// Mount Routers
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/project', projectRoute);

// ROOT
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the BugHound API!', version: '1.0' });
});

// 404
app.all('*', (req, res, next) => {
  next();
});

module.exports = app;
