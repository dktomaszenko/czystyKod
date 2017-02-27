/**
 * Created by usuario on 27/02/2017.
 */

requirejs.config({
    baseUrl: '../',
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-ui': 'bower_components/angular-ui/build/angular-ui',
        'jquery': 'bower_components/jquery/dist/jquery',

        'app': 'public/js/app',
        'mainCtrl': 'public/js/controller-as/mainCtrl'
    },
    shim: {
        angular: {
            deps: ['jquery']
        },
        app: {
            deps: ['angular']
        }
    }
});

