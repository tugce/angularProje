app.directive('bilgi', function(){
		return{
				restrict: 'E',
    scope: {
			info: '='
		},
    templateUrl: 'js/directives/bilgi.html'
	  };
});
