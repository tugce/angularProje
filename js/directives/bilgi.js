app.directive('bilgi', function(){
		return{
				restrict: 'E',
    scope: {
			info: '='
		},
		controller: 'MainController',
    templateUrl: 'js/directives/bilgi.html',
		link: function(scope, element, attrs) {
  scope.buttonText = "Düzenle",

  scope.Duzenle = function() {
    element.click(function() {
		  alert( "index = " + $scope.info.no );
		});
  }
}
	  };
});
