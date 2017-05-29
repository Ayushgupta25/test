contactsAppModule.factory('contactsFactory',function($q,$http){
	
	var getData = function(){
		var deferred = $q.defer();

		$http.get("data/data.json").then(function(res){
			deferred.resolve(res.data);
		},function(res){
			deferred.reject(res.data);
		})

		return deferred.promise;
	}
	return{
		getData : getData
	}
});