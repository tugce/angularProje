app.controller('AddBilgiController', function($scope, $routeParams) {
    $scope.message = 'This is Add new bilgi screen';
    $scope.params = $routeParams;
    $scope.template =  {name: 'AddBilgi', url: '/templates/add-bilgi.html'};
});
