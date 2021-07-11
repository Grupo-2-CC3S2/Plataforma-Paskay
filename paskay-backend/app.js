var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');
var generadorRouter = require('./routes/generador');
var searchRouter = require('./routes/search.routes');
var problemaRouter = require('./routes/problem.routes');
var solutionRouter = require('./routes/solucions');
var authRouter = require('./routes/auth.routes');

var bodyParser = require('body-parser');

let { createRoles } = require('./libs/initialSetup')

var app = express();
createRoles()


const { mongoose } = require('./database');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
//
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public',express.static(path.join(__dirname, 'storage/imgs')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/generador', generadorRouter);
app.use('/api/search', searchRouter);
app.use('/api/problems', problemaRouter);
app.use('/api/solutions', solutionRouter);
app.use('/api/auth', authRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
