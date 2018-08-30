process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
uri = 4545;
app.listen(uri);
module.exports = app;

console.log('OK: localhost:'+uri);