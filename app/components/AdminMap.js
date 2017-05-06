"use strict";
// Include React
var React = require("react");

// Creating the Form component
var AdminMap = React.createClass({

    // Here we set a generic state associated with the text being searched for
    getInitialState: function () {

        // TODO
        // we need to query db and return two arrays
        // one for users and one for admins
        // then we need to populate a map object with 2 different
        // colored pins based on user/admin
        // return {TODO};
    },


    // Here we describe this component's render method
    render () {
        return (
            <div className="row">
                <div id="map-view">
                    put map here
            </div>
            </div>
        );

    }
});
// Export the component back for use in other files
module.exports = AdminMap