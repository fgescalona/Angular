var playerControllers = angular.module('playerControllers', ['ngAnimate']);


playerControllers.controller('ListaController', ['$scope','$http' ,function($scope, $http){

	$http.get('js/data.json').success(function(data){
		$scope.players = data;
		$scope.playerOrder = 'nombre';
	});
}]);

playerControllers.controller('DetallesController', ['$scope','$http','$routeParams' ,function($scope, $http, $routeParams){

	$http.get('js/data.json').success(function(data){
		$scope.players = data;
		$scope.whichItem = $routeParams.itemID;

		if ($routeParams.itemID > 0)
		{
			$scope.preItem = Number($routeParams.itemID) - 1;
		}
		else
		{
			$scope.preItem = $scope.players.lenght-1;
		}

		if (true)
		{
			$scope.postItem = Number($routeParams.itemID) + 1;
		}
		else{
			$scope.postItem = 0;
		}


	});
}]);
