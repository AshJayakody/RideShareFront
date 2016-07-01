var app = angular.module('myApp', []);
app.controller('loginController', function ($scope) {
    $scope.isUser = false;
    $scope.isDriver= false;
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
            $scope.userImage ="/Assets/login/userLogActive_icon.png";
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
        window.location = "/Register.html";
    }
   

   
});

app.controller('splashScrn', function($location, $timeout) {

    $timeout(function() {
        $location.path('/LoginForm.html');
    }, 3000);

})