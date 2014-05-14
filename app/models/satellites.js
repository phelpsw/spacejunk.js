var mongoose = require('mongoose');

module.exports = mongoose.model('satellites', {
    name : String,
    lat : Number,
    lon : Number,
    status : String
});
