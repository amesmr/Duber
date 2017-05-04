var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBb83AdUnIv7TTeO4X2cvtmP8zkOuELvxM'
});

var propertyArray = [{}];
var currentProperty = {};
// Helper functions for making API Calls
var helper = {

    // This function serves our purpose of running the query to geolocate.
    locate: function (location) {

        console.log(location);
        var panorama;
        var map;
        googleMapsClient.geocode({
            address: location
        }, function (err, response) {
            if (!err) {
                // console.log(response.json.results);
                return response;
            }
        });
    }


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
