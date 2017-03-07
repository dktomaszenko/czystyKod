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
        'angular-auth-service': 'bower_components/angular-auth-service/angular-auth-service',
        'jquery': 'bower_components/jquery/dist/jquery',

        'app': 'public/js/app',
        'routeResolver': 'public/js/services/routeResolver',
        'authService': 'public/js/services/authService'
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
        'angular-auth-service': {
            exports: 'angular-auth-service',
            deps: ['angular']
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
            deps: ['routeResolver', 'angular-ui-bootstrap', 'angular-resource', 'authService']
        },
        'routeResolver': {
            deps: ['angular-route']
        },
        'authService': {
            deps: ['angular-auth-service']
        }
    }
});




