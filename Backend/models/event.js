var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const event = new Schema({
    name: {type:String,required:[true,'name is required!!'],index:{unique:true},sparse:true},
    description: {type:String, required:[true,'description required']},
    endTime:{type:String, required:[true,'end Time required']}   
});

module.exports = mongoose.model('event', event);