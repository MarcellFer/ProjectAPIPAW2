var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts'); // import express-ejs-layouts
const connectDB = require("./app_api/models/db")
connectDB();
var cors = require('cors');

//route app_api
const kategoriMakananRouterAPI = require('./app_api/routes/kategoriMakanan');
const asalMakananRouterAPI = require('./app_api/routes/asalMakanan');
const resepRouterAPI = require('./app_api/routes/resep');
const usersAPIRouter = require('./app_api/routes/users');

//route app_server
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts); 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/kategoriMakanan', kategoriMakananRouterAPI);
app.use('/api/asalMakanan', asalMakananRouterAPI);
app.use('/api/resep', resepRouterAPI);
app.use('/api/users', usersAPIRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
