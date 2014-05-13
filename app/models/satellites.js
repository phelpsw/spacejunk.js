var mongoose = require('mongoose');

module.exports = mongoose.model('satellites', {
    name : String/*,
    lat : float,
    lon : float,
    status : String*/
});
