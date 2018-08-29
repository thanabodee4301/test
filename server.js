process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//var mongoose = require('./config/mongoose');
var express = require('./config/express');
//var uri = 'mongodb://localhost/test';
//var db = mongoose();
var app = express();
uri = 4545;
app.listen(uri);
module.exports = app;

console.log('OK: localhost:'+uri);