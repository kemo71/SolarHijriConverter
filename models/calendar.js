var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    WK: String,
    HD: Number,
    HM: Number,
    HY: Number,
    GD: Number,
    GM: Number,
    GM: Number,
    GY: Number,
    SHD: Number,
    SHM: Number,
    SHY: Number
});

module.exports = mongoose.model('calendar', schema);