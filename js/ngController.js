//AngularJs Controller
function MainController($scope){
	chrome.storage.sync.get('note', function(value){
		$scope.$apply(function(){
			$scope.load(value);
		});
	});

	$scope.load = function(value){
		if (value && value.note && value.note != ""){
			$scope.note = value.note;
			$("#lock").click();
		}
	}

	$scope.save = function(){
		if (!lock){
			chrome.storage.sync.set({'note': $scope.note});
		} else {
			chrome.storage.sync.set({'note': ""});
		}
	}
}