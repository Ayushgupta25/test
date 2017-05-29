contactsAppModule.controller('contactsController',function($scope,contactsFactory){
	$scope.contactsObj = [];

	$scope.selectedContact = {};
	contactsFactory.getData().then(
		function(response){
			$scope.contactsObj = response.People;
			$scope.selectedContact = $scope.contactsObj[0];
			$scope.selectedIndex = 0;
		},
		function(){

		}
	);

	$scope.selectContact = function(obj){
		var index = $scope.contactsObj.indexOf(obj);
		$scope.selectedContact = $scope.contactsObj[index];
		$scope.selectedIndex = index;
	};

	$scope.openContact = function(obj) {
		var index = $scope.contactsObj.indexOf(obj);
		$scope.selectedContact = $scope.contactsObj[index];
		$('#contactModal').modal("show");
		$scope.selectedIndex = index;
	}
	
});