app.directive('list', function(plans) {
	return {
		restrict: 'AE',
		controller: function($scope) {
			$scope.swipeLeft = function(event){
				var cur = jQuery(event.currentTarget),
					container = cur.find('.container');
				var w = cur.width();
				container.css('-webkit-transform', 'translate(-'+w+'px, 0)');
			};
			$scope.swipeRight = function(event){
				restorePosition(jQuery(event.currentTarget));
			};

			function restorePosition(li){
				var cur = li,
					container = cur.find('.container');
				container.css('-webkit-transform', 'translate(0, 0)');
			}

			$scope.complete = function(event){
				var cur = jQuery(event.target),
					par = cur.parent().parent().parent();

				var id = par.attr('itemId');
				if(id != undefined){
					plans.setStatus(id, 1, function(){
						$scope.$emit('reload');
						restorePosition(par);
					});
				}
			};

			$scope.undo = function(event){
				var cur = jQuery(event.target),
					par = cur.parent().parent().parent();

				var id = par.attr('itemId');
				if(id != undefined){
					plans.setStatus(id, 0, function(){
						$scope.$emit('reload');
						restorePosition(par);
					});
				}
			};

			$scope.remove = function(event){
				var cur = jQuery(event.target),
					par = cur.parent().parent().parent();
				var id = par.attr('itemId');
				if(id != undefined){
					plans.remove(id, function(){
						par.hide('slow', function(){
							$scope.$emit('reload');
							restorePosition(par);
						});
					});
				}
			};
	    },
		templateUrl: 'app/views/list.html',
	    link: function(scope, element, attr){
      	}
	};
});