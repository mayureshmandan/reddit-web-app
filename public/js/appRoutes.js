angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/pics.html',
			controller: 'PicsController as vm'
		})

		.when('/pic/:picId', {
			templateUrl: 'views/current-pic.html',
			controller: 'CurrentPicController as vm'
		})

		.otherwise({
        templateUrl : "views/error.html"
    });

	$locationProvider.html5Mode(true);

}]);