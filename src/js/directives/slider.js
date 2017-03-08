app.directive('slider', [function() {
    return {
        link: function(scope, iElement, iAttrs) {

        },
        templateUrl: HOST+'src/templates/directives/slider.html',
        controller: function($scope, $interval, imageService) {
			 
            var i = 0;
            $scope.next = function () {
            	if (i < $scope.imageList.length) {
                    $scope.active = $scope.imageList[i++].id
                } else {
                    i = 0;
                    $scope.active = $scope.imageList[i++].id
                }
            }
            $scope.previous = function () {
            	i=i-1
            	if (i >= 0) {
                    $scope.active = $scope.imageList[i].id
                } else {
                    i = $scope.imageList.length -1;
                    $scope.active = $scope.imageList[i].id
                }
            }
            $scope.imageList = imageService.getImages();
            $interval(function() {
                $scope.next()
            }, 3000);

        }
    };
}])
