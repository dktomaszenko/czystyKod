'use strict';

define(['app'], function (app) {

    app.register.controller('CustomersController', ['$scope', '$window', '$timeout',
        function ($scope, $window, $timeout) {
            var vm = this;
            vm.test = 'Hola mundo.';
        }]);

});





/*    var injectParams = ['$location', '$filter', '$window',
 '$timeout'];
 var CustomersController = function ($location, $filter, $window,
 $timeout) {

 var vm = this;
 vm.test = 'Hola mundo.';
 };

 CustomersController.$inject = injectParams;

 app.register.controller('CustomersController', CustomersController);*/