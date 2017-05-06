var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBb83AdUnIv7TTeO4X2cvtmP8zkOuELvxM'
});

// Helper functions for making API Calls
var helper = {

    // // This function retrieves the user's google map data
    // locate: function (location) {
    //     console.log(location);
    //     googleMapsClient.geocode({
    //         address: location
    //     }, function (err, response) {
    //         if (!err) {
    //             // console.log(response.json.results);
    //             return response;
    //         }
    //     });
    // },

    // // TODO
    // // This function populates a map via an array of admins with pins
    // // of one color and another of users in a different color
    // getMap: function (users, admins) {
    //     // var map = new googleMapsClient.
    //     // return map;
    // },

};

// We export the API helper
module.exports = helper;