'use strict';

requirejs(['./common'], function () {
    requirejs([
            'app',
            'routeResolver',
            'authService',
            'config',
            'navbarController',
            'wcOverlay',
            'menuHighlighter'
        ],
        function () {
            angular.bootstrap(document, ['app']);
        });
});


