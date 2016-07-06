/// <reference path="C:\Users\ashjayakody\Documents\Visual Studio 2015\Projects\RideShareFront\RideShareFront\View/Register.html" />
///var app = angular.module('myApp', []);

angular.module("myApp", ['ngRoute'])
            .config(function ($routeProvider) {
                $routeProvider.when("/Index", {
                    templateUrl: "../View/Login.html"
                });
                $routeProvider.when("/Login", {
                    templateUrl: "../View/Login.html",
                    controller : 'loginController'
                });
                $routeProvider.when("/map", {
                    templateUrl: "../View/map.html"
                });
                $routeProvider.when("/Register", {
                    templateUrl: "../View/Register.html",
                    controller : 'registerController'
                });
                otherwise({
                    redirectTo: '/Index'
                });
                
                
            });


app.controller('loginController', function ($scope,$http) {
    $scope.isUser = false;
    $scope.isDriver = false;
    $scope.userName = "";
    $scope.password = "";
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
        $location.path = "/Register";
    }

   

    $scope.login = function () {
        $scope.result = '';

        var loginData = {
            username: $scope.userName,
            password: $scope.password
        };

        $http({
            method: 'POST',
            url: '/api/authenticate',
            data: $.param(loginData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(function (result) {
            console.log(result);
            $location.path("/map");
            sessionStorage.setItem(tokenKey, result.data.access_token);
          
        }, function (data, status, headers, config) {
            $scope.hasLoginError = true;
            $scope.loginErrorDescription = data.data.error_description;
        });


    }



});


app.controller('registerController',function($scope,$http){

    $scope.register = function () {

        $scope.hasRegistrationError = false;
        $scope.result = '';

        var data = {
            UserName: $scope.registerUserName,
            Email: $scope.registerEmail,
            Password: $scope.registerPassword
           
        };

        $http.post(registerUrl, JSON.stringify(data))
                .success(function (data, status, headers, config) {
                    $location.path("/login");
                }).error(function (data, status, headers, config) {
                    $scope.hasRegistrationError = true;
                    var errorMessage = data.Message;
                    console.log(data);
                    $scope.registrationErrorDescription = errorMessage;

                }).finally(function () {
                }); }})