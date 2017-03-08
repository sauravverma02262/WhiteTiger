app.controller('footerCtrl', function($scope, imageService) {

    $scope.footerSlider = imageService.getImages();

})
