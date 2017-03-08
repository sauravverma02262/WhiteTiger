app.directive('navigation', [function() {
    return {
        restrict: 'A',
        link: function(scope, iElement, iAttrs) {

        },
        templateUrl: HOST + 'src/templates/directives/navigation.html',
        controller: function($scope, $location, $anchorScroll) {
            $scope.menu = [
                { item: 'Home', url: '/home', submenu: [] }, {
                    item: 'About Us',
                    url: '/about_wtapps',
                    submenu: [{ item: 'About Wtapps', url: '/about_wtapps' },
                        { item: 'future vision', url: '/future_vision' }
                    ]
                }, {
                    item: 'Academics',
                    url: '/academics',
                    submenu: [
                        { item: 'program', url: '/programs' },
                        { item: 'SYllabus', url: '/syllabus' },
                        { item: 'fee structure', url: '/fee_structure' },
                        { item: 'Admissions', url: '/admissions' },
                        { item: 'download tc', url: '/download_tc' }


                    ]
                }, {
                    item: 'Life at wtapps',
                    url: '/fun_and_creativity',
                    submenu: [
                        { item: 'Gallery', url: '/gallery' },
                        { item: 'fun and creativity', url: '/fun_and_creativity' },
                        { item: 'facilities', url: '/facilities' },
                        { item: 'events and activities', url: '/events_and_activities' }
                    ]
                },
                { item: "principal's Desk", url: '/principal_desk', submenu: [] },
                { item: "Contact Us", url: '/contactus', submenu: [] }

            ]

            $scope.activeUrl = "/home";
            $scope.navigateTo = function(url, active) {
                $location.hash('top');
                $anchorScroll();
                $location.path(url);
                $scope.activeUrl = active;
            }

        }
    };
}])


/*
{ item: 'classes and teaching', url: '/classes_and_teaching' },
{ item: 'Admission enquiry form', url: '/admission_enquiry_form' }


{
    item: 'Academics',
    url: '/academics',
    submenu: [
        { item: 'SYllabus', url: '/syllabus' },
        { item: 'fee structure', url: '/fee_structure' },
        { item: 'Admissions', url: '/admissions' },
        { item: 'download tc', url: '/download_tc' }

    ]
}
*/
