app.controller('activityCtrl', ['$scope','activityService', function ($scope, activityService) {
	$scope.events= activityService.getActivityCalender()
}])