"use strict";
// Include React
import React from "react"

// This is the History component. It will be used to show a log of  recent
// searches.
export default class AdminLogin extends React.Component {
    // Here we describe this component's render method
    render() {
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
}

