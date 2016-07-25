app.config(['$routeProvider',
  function ($routeProvider, $httpprovider) {
    $routeProvider.
      when('/login', {
          templateUrl: 'Apps/components/login/login.html',
        controller: 'loginController'
      }).
         when('/map', {
             templateUrl: 'Apps/components/map/map.html',
            controller: 'showmapController'             

         }).
        when('/register', {
            templateUrl: 'Apps/components/register/register.html',
          controller: 'registerController'
        }).
         when('/newmap', {
             templateUrl: 'Apps/components/map/newmap.html'

         }).

      otherwise({
        redirectTo: '/login',

      });
  }]);