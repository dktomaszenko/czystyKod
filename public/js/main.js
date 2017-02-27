/**
 * Created by usuario on 27/02/2017.
 */

requirejs(['./common'], function () {
    requirejs(['app'], function () {
        angular.bootstrap(document, ['app']);
    });
});

