//app.service('Map', function ($q) {

//    this.init = function () {
//        var options = {
//            center: new google.maps.LatLng(6.9271, 79.8612),
//            zoom: 14,
//            disableDefaultUI: true
//        }
//        this.map = new google.maps.Map(
//            document.getElementById("map"), options
//        );
       
      
//        this.places = new google.maps.places.PlacesService(this.map);

//    }

//    this.search = function (str) {
//        var d = $q.defer();
//        this.places.textSearch({ query: str }, function (results, status) {
//            if (status == 'OK') {
//                d.resolve(results[0]);
//            }
//            else d.reject(status);
//        });
//        return d.promise;
//    }

//    this.addMarker = function (res) {
//        if (this.marker) this.marker.setMap(null);
//        this.marker = new google.maps.Marker({
//            map: this.map,
//            position: res.geometry.location,
//            animation: google.maps.Animation.DROP
//        });
//        this.map.setCenter(res.geometry.location);
//    }

//});

//app.controller('showmapController', function ($scope, Map) {

//    $scope.mylocationplace = {};
//    $scope.destinationplace = {};
//    //
//    $scope.searchMyLocation = function () {
//        $scope.apiError = false;
//        Map.search($scope.mylocation)
//        .then(
//            function (res) { // success
//                Map.addMarker(res);
//                $scope.mylocationplace.name = res.name;
//                $scope.mylocationplace.lat = res.geometry.location.lat();
//                $scope.mylocationplace.lng = res.geometry.location.lng();
//            },
//            function (status) { // error
//                $scope.apiError = true;
//                $scope.apiStatus = status;
//            }
//        );
//    }

//    $scope.searchDestination = function () {
//        $scope.apiError = false;
//        Map.search($scope.destination)
//        .then(
//            function (res) { // success
//                Map.addMarker(res);
//                $scope.destinationplace.name = res.name;
//                $scope.destinationplace.lat = res.geometry.location.lat();
//                $scope.destinationplace.lng = res.geometry.location.lng();
//            },
//            function (status) { // error
//                $scope.apiError = true;
//                $scope.apiStatus = status;
//            }
//        );
//    }

//    $scope.send = function () {
//        alert($scope.mylocationplace.name + ' : ' + $scope.mylocationplace.lat + ', ' + $scope.mylocationplace.lng);
//    }

//    Map.init();
//});



     