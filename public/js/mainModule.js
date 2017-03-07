/**
 * Created by usuario on 27/02/2017.
 */

define(function () {
    'use strict';
    var mainModule = angular.module('mainModule', []);
    mainModule.controller('MainCtrl', function () {
        var vm = this;
        vm.test = 'Hola mundo';
    });
});