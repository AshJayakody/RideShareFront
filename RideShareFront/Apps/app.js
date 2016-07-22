var app = angular.module("myApp", ['ngRoute', 'ngMap']);


app.config(['$routeProvider',
  function($routeProvider,$httpprovider) {
      $routeProvider.
        when('/login', {
            templateUrl: '../View/login.html',
            controller: 'loginController'
        }).
           when('/map', {
               templateUrl: '../View/map.html'
               //controller: 'showmapController'             
              
           }).
          when('/register', {
              templateUrl: '../View/register.html',
              controller: 'registerController'
          }).
           when('/newmap', {
               templateUrl: '../View/newmap.html'
              
           }).        
           
        otherwise({
            redirectTo: '/login' , 
         
        });
  }]);







    





