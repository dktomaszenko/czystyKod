/**
 * Created by usuario on 27/02/2017.
 */

requirejs.config({
    baseUrl: '../',
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-ui': 'bower_components/angular-ui/build/angular-ui',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angular-resource': 'bower_components/angular-resource/angular-resource',
        'angular-animate': 'bower_components/angular-animate/angular-animate',
        'angular-ui-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap',
        'jquery': 'bower_components/jquery/dist/jquery',

        'app': 'public/js/app',
        'routeResolver': 'public/js/services/routeResolver'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'angular': {
            exports: 'angular'
        },
        'angular-animate': {
            exports: 'angular-animate',
            deps: ['angular']
        },
        'angular-ui-bootstrap': {
            exports: 'angular-ui-bootstrap',
            deps: ['angular-animate']
        },
        'angular-route': {
            exports: 'ngRoute',
            deps: ['angular']
        },
        'angular-resource': {
            exports: 'angular-resource',
            deps: ['angular']
        },
        'app': {
            deps: ['routeResolver', 'angular-ui-bootstrap', 'angular-resource']
        },
        'routeResolver': {
            deps: ['angular-route']
        }
    }
});




