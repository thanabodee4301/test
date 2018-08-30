var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyparser = require('body-parser');
var validator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
module.exports = () => {
    var app = express();
    if (process.env.NODE_ENV == 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression)
    }
    app.use(session({
        secret:'secret_key',
        resave:false,
        saveUninitialized:true
    }));
    //app.use(passport.initialize());
    //app.use(passport.session());
    app.use(bodyparser.urlencoded({
        extended: true
    }));
    app.use(bodyparser.json());
    app.use(validator());
    app.set('views', './app/views');
    app.set('view engine','ejs')
 /*   require('../app/routes/index.server.routes')(app);
    require('../app/routes/user.server.routes')(app);
    */
   require('../app/routes/soccerApi.server.routes')(app);
    app.use(express.static('./public/'));
    return app;
};