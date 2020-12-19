const express = require('express');
const dotnev = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const exphbs = require('express-handlebars');

// Load config
dotnev.config({ path: './config/config.env' });

// Load the MongoDB
connectDB();

// Initialized express.js
const app = express();

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Routes
app.use('/', require('./routes/index'));

// Port
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
