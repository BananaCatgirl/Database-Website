var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const compression = require("compression");
const helmet = require("helmet");
const secrets = require("./secrets.json");

//making a git commit

var indexRouter = require('./routes/index');
var catalogRouter = require('./routes/catalog');
const isbnRouter = require("./routes/isbn");
const apiV1Router = require("./routes/apiV1");
const userRouter = require("./routes/users");

var app = express();

// Set up rate limiter: maximum of twenty requests per minute
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30,
});
// Apply rate limiter to all requests
app.use(limiter);

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// process.env.MONGODB_URI ||
const uri = process.env.MONGODB_URI;
const mongoDB = uri || secrets.Database_Token;
main().catch((err) => console.log(err));
async function main()
{
  await mongoose.connect(mongoDB);
  console.log("connected to mongoDB");
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       "script-src":
//         ["'self'",
//           "code.jquery.com",
//           "cdn.jsdelivr.net",
//         ],
//     },
//   }),
// );

app.use('/', indexRouter);
app.use('/catalog', catalogRouter);
app.use('/isbn', isbnRouter);
app.use("/users", userRouter);
app.use("/api", apiV1Router);


// catch 404 and forward to error handler
app.use(function (req, res, next)
{
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next)
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
