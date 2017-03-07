app.service('activityService', [function() {
    this.activityChart = [{
        sn: "1",
        month: "April",
        celebration: "Yellow Day(Baisakhi)",
        activity: "Let’s Taste (Sweet/Sour)"
    }, {
        sn: "2",
        month: "May",
        celebration: "Yellow Day",
        activity: "Mask Making"
    }, {
        sn: "3",
        month: "July",
        celebration: "Green Day",
        activity: "Plant Trees+ Mat Making+ Nature Talk+ Leaf Printing"
    }, {
        sn: "4",
        month: "August",
        celebration: "Blue Day (Rainy Season)",
        activity: "Fan/Boat Making"
    }, {
        sn: "5",
        month: "September",
        celebration: "Pink Day (Teacher’s Day)",
        activity: "Learning Word Starting with ‘P’ Letter"
    }, {
        sn: "6",
        month: "October",
        celebration: "Purple Day(Traditional Dress)",
        activity: "Hindi Recitation"
    }, {
        sn: "7",
        month: "November",
        celebration: "Cultural Heritage (Diwali &amp; Dussehra)",
        activity: "Fancy Dress"
    }, {
        sn: "8",
        month: "December",
        celebration: "Red Day (Christmas)",
        activity: "English Recitation"
    }, {
        sn: "9",
        month: "January",
        celebration: "Orange Day",
        activity: "Hindi Calligraphy"
    }, {
        sn: "10",
        month: "February",
        celebration: "Yellow Day (Spring Season)",
        activity: "English Calligraphy"
    }];


    this.facility = [{
        item: "Parent Alert SMS system for kids Arrival/ Departure"
    }, {
        item: "Real Time Bus tracking system"
    }, {
        item: "Complete School under CCTV Cameras."
    }, {
        item: "Traffic Park to give the kid better sense of Traffic Rules and Signals"
    }, {
        item: "Separate Activity Rooms"
    }, {
        item: "Huge Open Ground to inherit kids with sports activities"
    }, {
        item: "Central air conditioned Smart Class-rooms"
    }, {
        item: "Renovation of class rooms with innovative teaching method structure"
    }, {
        item: "Concrete fencing of the school premises"
    }, {
        item: "Construction of new class-room"
    }];

    this.futureVisionList = [{
        item: "Nature Park"
    }, {
        item: "E-Learning"
    }, {
        item: "YouTube learning in every class."
    }, {
        item: "Provision of kindles"
    }, {
        item: "Snake and ladders"
    }];

    this.getActivityCalender = function() {
        return this.activityChart;
    }
    this.getFacilityList = function() {
        return this.facility;
    }
    this.getFutureVisionList = function() {
        return this.futureVisionList;
    }
}]);
