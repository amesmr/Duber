"use strict";
// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent
// searches.
var AdminLogin = React.createClass({
    // Here we describe this component's render method
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Admin Login</h3>
                </div>
                <div className="panel-body text-center">
                    This is the AdminLogin page
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = AdminLogin;
