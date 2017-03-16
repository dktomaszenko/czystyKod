'use strict';

define(['app'], function (app) {

    app.controller('NavbarController', ['$scope', '$location', 'config', 'authService',
        function ($scope, $location, config, authService) {
            var vm = this,
            appTitle = 'Customer Management';

            vm.isCollapsed = false;
            vm.appTitle = (config.useBreeze) ? appTitle + ' Breeze' : appTitle;

            vm.init = function () {

            };

        }]);

});
