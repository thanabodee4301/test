var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =new Schema({
    firstName:String,
    lastName:String,
    userName:String,
    email:{type:String,index:true},
    password:String
});

mongoose.model('User',UserSchema);