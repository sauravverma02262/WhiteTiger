app.controller('galleryController', ['$scope', 'imageService', function($scope, imageService) {

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
    $scope.GalleryImages= $scope.images = imageService.getImages();
    
}])
