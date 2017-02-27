/**
 * Created by usuario on 27/02/2017.
 */


define(['angular-route'], function () {
    angular
        .module('app', [
            'ngRoute'
        ])
        .controller('mainCtrl', function () {
            var vm = this;
            vm.test = 'Hola mundo';
        });
});


