app.controller('loginController', ['$scope', '$http','$location', function ($scope, $http,$location) {
    $scope.title = "Login";
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
        $location.path('/register');
       // window.location = "/View/Register.html";
    }



    $scope.errorMessages = "";

    $scope.login = function () {

        if ($scope.UserName && $scope.Password) {
            var loginmodel = {

                "UserName": $scope.UserName,
                "Password": $scope.Password
            }
            $http.post('http://localhost:63603//api/Authentication/post', loginmodel).
                success(function (data, status, headers, config) {
                    alert('Login Successfully!');
                    $location.path('/newmap');
                }).
                error(function (data, status, headers, config) {
                    $scope.errorMessages = data;
                    alert("error");
                   
                });

        }
    }


}]);
