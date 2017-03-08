app.controller('aboutCtrl', ['$scope', 'activityService', function($scope, activityService) {
   $scope.listData = activityService.getFutureVisionList()
}])
