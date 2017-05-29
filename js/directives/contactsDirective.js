contactsAppModule.directive('contactDetails',function(){
	var contactDirective = {
		scope : {
			"data":"="
		},
		templateUrl : "templates/contactDetails.html",
		controller : function($scope, $element, $attrs){
			console.log($element);
			$scope.test = {};
			$scope.test.showDetails = false;
			
			$scope.playerDetails = function(index){
				//console.log($scope.data);
				if($scope.test.showDetails){
					$scope.test.showDetails = false;
				}else{
					$scope.test.showDetails = true;
				}
			}
		}
		
	}
	return contactDirective;
});