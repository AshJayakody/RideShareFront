/// <reference path="C:\Users\ashjayakody\Documents\Visual Studio 2015\Projects\RideShareFront\RideShareFront\View/Register.html" />
var app = angular.module('myApp', []);



app.controller('loginController', [ '$scope' , '$http' , function ($scope,$http) {
    $scope.isUser = false;
    $scope.isDriver = false;
    //$scope.userName = "";
    //$scope.password = "";
    $scope.name = "Angular Works";

    $scope.userImage = "/Assets/login/userLog_icon.png";
    $scope.driverImage = "/Assets/login/driverLog_icon.png";
    
   

    $scope.setUser = function () {
        $scope.isUser = true;
        $scope.isDriver = false;
    }
    $scope.setUserImage = function () {
        if ($scope.isUser == true) {
            $scope.userImage = "/Assets/login/userLogActive_icon.png";
        }
        else {
            $scope.userImage = "/Assets/login/userLog_icon.png";
        }
    }



    $scope.setDriver = function () {
        $scope.isUser = false;
        $scope.isDriver = true;
    }
    $scope.setDriverImage = function () {
        if ($scope.isDriver == true) {
            $scope.driverImage = "/Assets/login/driverLogActive_icon.png";
        }
        else {
            $scope.driverImage = "/Assets/login/driverLog_icon.png";
        }
    }

    $scope.register = function () {
        //$location.path = "/Register";
        window.location = "/View/Register.html";
    }

    $scope.map = function () {
        //$location.path = "/Register";
        window.location = "/View/map.html";
    }

    $scope.errorMessages = "";

    $scope.login = function () {

        if ($scope.UserName && $scope.Password ) {
            var loginmodel = {
               
                "UserName": $scope.UserName,
                "Password": $scope.Password
            }
            $http.post('http://localhost:63603//api/Authenticate/post', loginmodel).
                success(function (data, status, headers, config) {
                    alert('Login Successfully!');
                    //window.location = "/View/map.html";
                }).
                error(function (data, status, headers, config) {
                    $scope.errorMessages = data;
                    //alert("error");

                });

        }
    };

  
}]);


app.controller('registerController',[ '$scope' , '$http' , function ($scope,$http) {
    $scope.registererrorMessages = "";

        $scope.submit = function () {
            if ($scope.registerFirstName &&  $scope.registerLastName && $scope.registerUserName && $scope.registerEmail && $scope.registerPassword) {
                var model = {
                    "FirstName": $scope.registerFirstName,
                    "LastName": $scope.registerLastName,
                    "UserName": $scope.registerUserName,
                    "Email": $scope.registerEmail,
                    "Password": $scope.registerPassword
                }
                $http.post('http://localhost:63603//api/register/post', model).
                    success(function (data, status, headers, config) {
                        alert('Registered Successfully!');
                        //window.location = "/View/Login.html";
                    }).
                    error(function (data, status, headers, config) {
                        $scope.registererrorMessages = data;
                        //alert("error");
                       
                    });

            }
        };
}])


    app.controller("showmap", function ($scope, $interval) {
        $scope.map = {
            center: {
                latitude: 56.162939,
                longitude: 10.203921
            },
            zoom: 8
        };
    });





//var app= angular.module("myApp", ['ngRoute'])
//            .config(function ($routeProvider,$locationprovider) {
//                $routeProvider.when('/', {
//                    templateUrl: '../View/map.html',

//               });
//                $routeProvider.when('/Login', {
//                    templateUrl: "../View/Login.html",
//                    controller : 'loginController'
//                });
//                $routeProvider.when("/map", {
//                    templateUrl: "../View/map.html"
//                });
//                $routeProvider.when("/Register", {
//                    templateUrl: "../View/Register.html",
//                    controller : 'registerController'
//                });
//                otherwise({
//                    redirectTo: '/Index'
//                });

//                $locationProvider.html5Mode(true);
//            });
