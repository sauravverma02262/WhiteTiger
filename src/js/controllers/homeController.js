app.controller('homeCtrl', ['$scope', 'studentRecord','activityService', function($scope, studentRecord, activityService) {
    $scope.birthday = [];
    studentRecord.getBirthdayStudents().then(function(bdays) {
        $scope.birthday ={
        	eventData : bdays,
        	eventClass: 'birthday',
        	title: "Happy Birthday To You",
        	description: 'Happy Birthday To You',
        	image: HOST+"src/img/birthday_party.jpg"
        };
        $scope.events= activityService.getActivityCalender()
		$scope.calender  = {
        	eventData : $scope.events,
        	eventClass: 'calender',
        	title: "Calender",
        	description: 'Calender and Events for the year',
        	image: HOST+"src/img/calender.jpg"
        };
        $scope.trackBus  = {
            eventData : [],
            eventClass: 'track-bus',
            title: "Bus Tracking",
            description: "You can track your child's bus online",
            image: HOST+"src/img/vsm_roadmap.jpg"
        };

        console.log("$scope.birthday", $scope.birthday);
    })


}])
