var config =require('./config');
var mongoose = require('mongoose');

module.exports = function(){
    mongoose.set('debug',config.debug);
    require('../app/models/user.model');
    var db = mongoose.connect(config.mongoUri);
    return db;

};