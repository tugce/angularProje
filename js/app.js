var app = angular.module("angularProje", ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/AddBilgi', {
    templateUrl: '/templates/add-bilgi.html',
    controller: 'AddBilgiController'
  })
  .otherwise('/', {
    templateUrl: 'index.html',
    controller: 'MainController'
  });

});
