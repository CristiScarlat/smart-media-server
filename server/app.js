const express = require('express');
const path = require('path');
const bodyParser =	require("body-parser");
require('dotenv').config();


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const router = require('./routes');
app.use('/', router);

// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html', { error: err });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('api ready on port = ' + PORT);
})

module.exports = app;