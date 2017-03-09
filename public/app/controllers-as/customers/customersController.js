'use strict';

define(['app'], function (app) {

    app.register.controller('CustomersController', ['$scope', '$window', '$timeout',
        function ($scope, $window, $timeout) {
            var vm = this;

            vm.init = function () {
                vm.test = 'Hola soy customersController.';
            };
        }]);

});


// Otra forma de crear un controller con la injeccion de entrada ******************************

/*    var injectParams = ['$location', '$filter', '$window',
 '$timeout'];
 var CustomersController = function ($location, $filter, $window,
 $timeout) {

 var vm = this;
 vm.test = 'Hola mundo.';
 };

 CustomersController.$inject = injectParams;

 app.register.controller('CustomersController', CustomersController);*/