app.controller('MainController', ['$scope', function($scope, $route, $routeParams, $location) {
	$scope.title = 'Bilgi Kütüphanesi';
	$scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
	$scope.bilgi = [
	    {
	        isim: 'test',
		      no: 1,
	        icerik: "test test"
	    }
	];
	$scope.yeniBilgiNo = "->";
	$scope.yeniBilgiAd = "";
	$scope.icerik = "";
	$scope.yeniBilgiEkle = function(){
			var yeniBilgi = [{isim: $scope.yeniBilgiAd, no: $scope.bilgi.length + 1, icerik: icerik}];
			var currentList = $scope.bilgi;
			var newList = currentList.concat(yeniBilgi);
			$scope.bilgi = newList;
			yeniBilgiNo = yeniBilgiNo + 1;
	};

}]);
