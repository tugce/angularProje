app.controller('AddBilgiController', function($scope, $routeParams) {
    $scope.message = 'This is Add new bilgi screen';
    $scope.params = $routeParams;
    $scope.template =  {name: 'add-bilgi.html', url: 'js/templates/add-bilgi.html'};
});
