var app = angular.module("myApp", ['ngRoute']);


app.config(['$routeProvider',
  function($routeProvider,$httpprovider) {
      $routeProvider.
        when('/login', {
            templateUrl: '../View/login.html',
            controller: 'loginController'
        }).
           when('/map', {
               templateUrl: '../View/map.html',
               controller: 'showmapController',             
              
           }).
<<<<<<< HEAD
          when('/register', {
              templateUrl: '../View/register.html',
              controller: 'registerController'
=======
          when('/Register', {
              templateUrl: '../View/Register.html',
              controller: 'registerController',
>>>>>>> origin/master
          }).
           when('/maptest', {
               templateUrl: '../View/maptest.html',
               controller: 'maptestController'
           }).
        otherwise({
            redirectTo: '/login' 
         
        });
  }]);







    





