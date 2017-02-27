/**
 * Created by usuario on 27/02/2017.
 */

requirejs.config({
    baseUrl: '../',
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-ui': 'bower_components/angular-ui/build/angular-ui',
        'angular-route': 'bower_components/angular-route/angular-route',
        'jquery': 'bower_components/jquery/dist/jquery',

        'app': 'public/js/app',
        'mainCtrl': 'public/js/controller-as/mainCtrl'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            exports: 'ngRoute',
            deps: ['angular']
        },
        'mainCtrl': {
            deps: ['angular']
        },
        'app': {
            deps: ['angular-route', 'mainCtrl']
        }
    }
});



