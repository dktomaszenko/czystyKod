=====  TEST ======

…or create a new repository on the command line

echo "# czystyKod" >> README.md

git init

git add README.md

git commit -m "first commit"

git remote add origin https://github.com/dktomaszenko/czystyKod.git

git push -u origin master

…or push an existing repository from the command line

git remote add origin https://github.com/dktomaszenko/czystyKod.git

git push -u origin master

…or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.


-----------------------------------------------------------------------------------------------------

The ng-cloak directive prevents the document from showing unfinished AngularJS code while AngularJS is being loaded.

$broadcast == publish
$on = subscribe

$scope.startScanner = function() {
    $rootScope.$broadcast('scanner-started');
}
$rootScope.$broadcast('scanner-started', { any: {} });

$scope.$on('scanner-started', function(event, args) {

    // do what you want to do
});

-------------------------------------------------------------------------------------

Difference between $location.path(“/home”) and $location.$$path=“/home” in angularjs

Code 1

 $location.path("/home");
This code is working good.No issues.

Code 2

$location.$$path="/home";
This code does not working probably, because the page is redirected, but URL is shown previous URL,does not changed the redirected URL.

