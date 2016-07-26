app.service('Map', function ($q) {
    

    this.init = function () {
        var options = {
            center: new google.maps.LatLng(6.9271, 79.8612),
            zoom: 14,
            disableDefaultUI: true
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );


        this.places = new google.maps.places.PlacesService(this.map);

    }

    this.search = function (str) {
        var d = $q.defer();
        this.places.textSearch({ query: str }, function (results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }

    this.addMarker = function (res) {
        if (this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            icon: 'Assets/img/main/person.png',
            animation: google.maps.Animation.DROP
        });
        this.map.setCenter(res.geometry.location);
    }

    this.addDriverMarker = function (res) {
        if (this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: new google.maps.LatLng(res.latitude, res.longitude),
            icon: 'Assets/img/main/car.png',
            title: res.DriverName,
        });
        
    }
   
    //this.driverLocation = function () {
    //    return $http.get('http://localhost:63603//api/DriverLocations');
    //}
    

});