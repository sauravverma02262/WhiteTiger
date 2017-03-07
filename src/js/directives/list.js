app.directive('list', [function() {
    return {
        scope: {
            listData: '='
        },
        templateUrl: HOST+'src/templates/directives/list.html',

    };
}])
