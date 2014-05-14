var Satellites = require('./models/satellites');
var Users = require('./models/users');

module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all satellites
    app.get('/api/satellites', function(req, res) {
	Users.findOne({'name' : 'bob2'}, 'objects', function(err, user) {
	    var objects = user.objects;

	    // use mongoose to get all satellites in the database
	    Satellites.find({'$and' : [{'norad' : {'$in' : objects}}, {'status' : 'alive'}]}, 'lat lon', function(err, sats) {

		// if there is an error retrieving, send the error.
		// nothing after res.send(err) will execute
		if (err)
		    res.send(err)

		res.json(sats); // return all satellites in JSON format
	    });
	});
    });

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
	// load the single view file (angular will handle the page changes on the
	// front-end)
	res.sendfile('./public/index.html'); 
    });
};
