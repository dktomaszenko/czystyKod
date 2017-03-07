'use strict';

requirejs(['./common'], function () {
    requirejs([
            'app',
            'routeResolver',
            'authService'
        ],
        function () {
            angular.bootstrap(document, ['app']);
        });
});


