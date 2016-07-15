app.controller('registerController', ['$scope', '$http', function ($scope, $http) {
    $scope.registererrorMessages = "";
    $scope.title = "Register";

    $scope.submit = function () {
        if ($scope.registerFirstName && $scope.registerLastName && $scope.registerUserName && $scope.registerEmail && $scope.registerPassword) {
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
}]);