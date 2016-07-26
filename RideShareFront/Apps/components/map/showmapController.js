app.controller('showmapController', function ($scope, Map) {
    $scope.gPlace;
    $scope.mylocationplace = {};
    $scope.destinationplace = {};
    $scope.driverLocations = {};
    
    $scope.searchMyLocation = function () {
        $scope.apiError = false;
        Map.search($scope.mylocation)
        .then(
            function (res) { // success
                Map.addMarker(res);
                $scope.mylocationplace.name = res.name;
                $scope.mylocationplace.lat = res.geometry.location.lat();
                $scope.mylocationplace.lng = res.geometry.location.lng();
            },
            function (status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );

      
    }

    $scope.searchDestination = function () {
        $scope.apiError = false;
        if ($scope.destination != null){
        Map.search($scope.destination)
        .then(
            function (res) { // success
                Map.addMarker(res);
                $scope.destinationplace.name = res.name;
                $scope.destinationplace.lat = res.geometry.location.lat();
                $scope.destinationplace.lng = res.geometry.location.lng();
            },
            function (status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
        }
    }

    $scope.$watch('mylocation', function ($http) {
        fetch();

        function fetch($http) {
            $http.get('http://localhost:63603//api/DriverLocations')
            .then
                (function (response) {
                    Map.addDriverMarker(response);

                });
        }
    },true);

    

    //$scope.send = function () {
    //    alert($scope.mylocationplace.name + ' : ' + $scope.mylocationplace.lat + ', ' + $scope.mylocationplace.lng);
    //}

    Map.init();
});



     