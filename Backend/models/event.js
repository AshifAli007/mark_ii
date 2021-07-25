var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const event = new Schema({
    name: {type:String,required:[true,'name is required!!'],index:{unique:true},sparse:true},
    brief: String,
});

module.exports = mongoose.model('event', event);