'use strict'

angular.module('rutasFaciles', [
	'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('a', '/PaAnibal')
	
	$stateProvider
		.state('PaAnibal', {
			url: '/PaAnibal',
			template: '<h1>A las 6pm </h1>' 
		})

		.state('MaKelly',{
			url: '/MaKelly',
			template: '<h2>Momentos en <b>familia</b></h2>'

		});
}]);