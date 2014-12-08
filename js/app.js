var miApp = angular.module('miApp', ['ngRoute','playerControllers']);

miApp.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/lista',{
		templateUrl: 'Parciales/lista.html',
		controller: 'ListaController'
	}).
	when('/detalles/:itemID', {
		templateUrl: 'Parciales/detalles.html',
		controller: 'DetallesController'
	}).
	otherwise({
		redirectTo: '/lista'
	})
}]);