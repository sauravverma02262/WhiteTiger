app.controller('facilityCtrl', ['$scope', 'activityService', function($scope, activityService) {
    $scope.listData = activityService.getFacilityList()
}])
