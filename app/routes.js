var Satellites = require('./models/satellites');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all satellites
	app.get('/api/satellites', function(req, res) {

		// use mongoose to get all todos in the database
		Satellites.find(function(err, sats) {
		    // if there is an error retrieving, send the error.
		    // nothing after res.send(err) will execute
		    if (err)
			    res.send(err)

		    res.json(sats); // return all todos in JSON format
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
	    // load the single view file (angular will handle the page changes on the
	    // front-end)
	    res.sendfile('./public/index.html'); 
	});
};
