var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var clients = require('./routes/clients');

var app = express();

var port = 8080;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client-app')));

// TODO:  disable CORS for *
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// client routes
app.use('/api/clients', clients);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
});

// use native Node promises in Mongoose
mongoose.Promise = global.Promise;

// not for prod
var seed = require('./client-seed');
app.use(function(req, res, next) {
  if (req.app.get('env') === 'development') {
    seed();
  }
});

// connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:8082/test')
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

app.listen(port);

module.exports = app;