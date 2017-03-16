'use strict';

requirejs(['./common'], function () {
    requirejs([
            'app',
            'routeResolver',
            'authService',
            'config',
            'navbarController'
        ],
        function () {
            angular.bootstrap(document, ['app']);
        });
});


