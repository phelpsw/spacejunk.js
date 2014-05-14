var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : String,
    objects : [Number]
});

module.exports = mongoose.model('users', schema);
