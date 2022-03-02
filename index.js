const express = require('express');
const createErr = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs')
app.use(express.static('./views/css'))

app.get('/', async(req, res) => {
   res.render('./views/html/index.ejs', {
     endpoints: 'test'
   })
})

app.use((req, res, next) => {
  next(createErr.NotFound());
});

app.use(errorHandler);