angular.module('satelliteService', [])

	// super simple service
	// each function returns a promise object
	.factory('Satellites', function($http) {
		return {
			get : function() {
				return $http.get('/api/manage-sats');
			},
			create : function(id) {
				return $http.post('/api/manage-sats', id);
			},
			delete : function(id) {
				return $http.delete('/api/manage-sats/' + id);
			}
		}
	});
