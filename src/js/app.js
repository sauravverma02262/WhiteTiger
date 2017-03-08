
var app = angular.module("WhiteTiger", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: HOST+"src/templates/home.html",
            controller: 'homeCtrl'
        })
        .when("/home", {
            templateUrl: HOST+"src/templates/home.html",
            controller: 'homeCtrl'
        })
        .when("/gallery", {
            templateUrl: HOST+"src/templates/gallery.html",
            controller: 'galleryController'
        })
        .when("/about_wtapps", {
            templateUrl: HOST+"src/templates/pages/aboutWtapps.html",
            controller: 'aboutCtrl'
        })
        .when("/contactus", {
            templateUrl: HOST+"src/templates/contactus.html"
        })
        .when("/aboutus", {
            templateUrl: HOST+"src/templates/aboutus.html",
            controller: 'aboutCtrl'
        })
        .when("/future_vision", {
            templateUrl: HOST+"src/templates/pages/futureVision.html",
            controller: 'aboutCtrl'
        })
        .when("/programs", {
            templateUrl: HOST+"src/templates/pages/program/program.html"
        })
        .when("/lkg", {
            templateUrl: HOST+"src/templates/pages/program/programLKG.html"
        })
        .when("/ukg", {
            templateUrl: HOST+"src/templates/pages/program/programUKG.html"
        })
        .when("/syllabus", {
            templateUrl: HOST+"src/templates/pages/academic/syllabus.html"
        })
        .when("/fee_structure", {
            templateUrl: HOST+"src/templates/pages/academic/feeStructure.html"
        })
        .when("/admissions", {
            templateUrl: HOST+"src/templates/pages/academic/admissions.html"
        })
        .when("/download_tc", {
            templateUrl: HOST+"src/templates/pages/academic/downloadTc.html"
        })
        .when("/admission_enquiry_form", {
            templateUrl: HOST+"src/templates/pages/academic/admissionEnquiryForm.html"
        })
        .when("/classes_and_teaching", {
            templateUrl: HOST+"src/templates/pages/lifeAtWtapps/classesAndTeaching.html"
        })
        .when("/fun_and_creativity", {
            templateUrl: HOST+"src/templates/pages/lifeAtWtapps/funAndCreativity.html",
            controller: 'galleryController'
        })
        .when("/facilities", {
            templateUrl: HOST+"src/templates/pages/lifeAtWtapps/facilities.html",
            controller: 'facilityCtrl'
        })
        .when("/events_and_activities", {
            templateUrl: HOST+"src/templates/pages/lifeAtWtapps/eventsAndActivities.html",
            controller: 'activityCtrl'
        })
        .when("/principal_desk", {
            templateUrl: HOST+"src/templates/pages/principalDesk.html"
        });


});
