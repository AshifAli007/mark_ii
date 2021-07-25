var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name: {type:String,required:[true,'name is required!!'],index:{unique:true},sparse:true},
    password: String,
});

module.exports = mongoose.model('user', user);