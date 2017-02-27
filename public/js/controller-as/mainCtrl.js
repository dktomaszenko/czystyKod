/**
 * Created by usuario on 27/02/2017.
 */

define(function () {
    angular
        .module('app')
        .controller('mainCtrl', function () {
            var vm = this;
            vm.test = 'Hola mundo';
        });
});
