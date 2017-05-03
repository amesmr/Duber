var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBb83AdUnIv7TTeO4X2cvtmP8zkOuELvxM'
});

var propertyArray = [{}];
var currentProperty = {};
// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(location) {

    console.log(location);
        var panorama;
        var map;
        googleMapsClient.geocode({
            address: location
        }, function (err, response) {
            if (!err) {
                console.log(response.json.results);

                // this data now
                currentProperty.lat = response[0].geometry.location.lat;
                currentProperty.lng = response[0].geometry.location.lng;
                currentProperty.googlePlaceID = response[0].place_id;
                currentProperty.googlePlaceLocation = response[0].geometry.location;
            }
        });


        //once the document is loaded, see if google has a streetview image within 50 meters of the given location, and load that panorama
        var sv = new google.maps.StreetViewService();



        sv.getPanoramaByLocation(propertyArry[googleID].googlePlaceLocation, 50, function (data, status) {
            if (status == 'OK') {
                //google has a streetview image for this location, so attach it to the streetview div
                var panoramaOptions = {
                    pano: data.location.pano,
                    addressControl: false,
                    navigationControl: true,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.SMALL
                    }
                };

                var mapOptions = {

                    center: propertyArry[googleID].googlePlaceLocation,
                    zoom: 8,
                    scrollwheel: true,
                    zoom: 14
                };

                var panorama = new google.maps.StreetViewPanorama(document.getElementById("street-view"), panoramaOptions);
                var map = new google.maps.Map(document.getElementById('map-view'), mapOptions);
                var marker = new google.maps.Marker({
                    map: map,
                    position: propertyArry[googleID].googlePlaceLocation,
                    title: propertyArry[googleID].fullAddress

                });
            } else {
                //no google streetview image for this location, so hide the streetview div
                $('#' + "street-view").parent().hide();
                $('#' + "map-view").parent().hide();
            }
        });

    }
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;
