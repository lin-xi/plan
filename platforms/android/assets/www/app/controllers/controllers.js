app.controller('IndexController', function ($scope, $location, $routeParams, plans, util) {
    init();
    
    function init(){
    	$scope.date = util.today();
    	if($routeParams.date != 0){
    		$scope.date = new Date($routeParams.date-0);
    	}
    	$scope.plans = [];

    	plans.create();

		$scope.onBlur = function(value){
			if(value){
				var obj = {
					content: value,
					type: 3,
					status: 0,
					fromDate: $scope.date.getTime(),
					toDate: util.tomorrow($scope.date).getTime(),
					finishDate: 0
				};
				plans.put(obj, function(){
					$scope.$apply(function(){
						$scope.plan = '';
					});
					getData();
				});
			}
		};

		$scope.prev = function(){
			var yestoday = util.yestoday($scope.date);
			$location.path('/index/'+yestoday.getTime());
		};

		$scope.next = function(){
			var tomorrow = util.tomorrow($scope.date);
			$location.path('/index/'+tomorrow.getTime());
		};

		$scope.$on('reload', function() {
    		getData();
  		});

		function getData(){
			plans.get($scope.date.getTime(), function(result){
	    		$scope.$apply(function(){
	    			$scope.plans = result;
	    		});
	    	});
		}

		getData();
    }

});


app.controller('AboutController', function ($scope) {
});
