'use strict';

requirejs(['./common'], function () {
    requirejs([
            'app',
            'routeResolver'
        ],
        function () {
            angular.bootstrap(document, ['app']);
        });
});


