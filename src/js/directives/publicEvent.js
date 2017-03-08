app.directive('publicEvent', ['$q', function($q) {
    return {
        scope: {
            event: '='
        },
        templateUrl: HOST + 'src/templates/directives/publicEvent.html',
        controller: function($scope, $interval) {
            var i = 0;
            $scope.next = function() {
                if (i < $scope.event.eventData.length) {
                    $scope.active = $scope.event.eventData[i++].AdmissionNumber
                } else {
                    i = 0;
                    $scope.active = $scope.event.eventData[i++].AdmissionNumber
                }
            }
            if ($scope.event.eventClass === 'birthday') {
                $interval(function() {
                    $scope.next()
                }, 3000)
            }
            $scope.popup = false;
            $scope.showDetails = function(event) {
                $scope.popup = true;
                $scope.popData = event;
            }

        }
    };
}])
