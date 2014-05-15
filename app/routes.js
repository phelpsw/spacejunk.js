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

    app.get('/api/manage-sats', function(req, res) {
	Users.findOne({'name' : 'bob2'}, function(err, user) {
	    if (err)
		res.send(err)
	    res.json(user);
	});
    });

    // create satellite and send back all user sats after creation.
    app.post('/api/manage-sats', function(req, res) {
        console.log(req.body.id);
	// TODO: verify req.body.text is integer and is unique
	Users.update({'name' : 'bob2'},
		     {'$push' : {objects: Number(req.body.id)}},
		     function(err, todo) {
			if (err)
			    res.send(err);
			Users.findOne({'name' : 'bob2'}, function(err, user) {
			    if (err)
				res.send(err)
			    res.json(user);
			});
	});
    });

    // delete a satellite
    app.delete('/api/manage-sats/:obj_id', function(req, res) {
	Users.update({'name' : 'bob2'},
		     {'$pull' : {objects: Number(req.params.obj_id)}},
		     function(err, todo) {
			if (err)
			    res.send(err);
			Users.findOne({'name' : 'bob2'}, function(err, user) {
			    if (err)
				res.send(err)
			    res.json(user);
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
