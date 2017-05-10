"use strict";
// Include React
import React, { Component, PropTypes } from 'react';

// Creating the Form component
export default class AdminMap extends React.Component {

    // Here we set a generic state associated with the text being searched for
    // getInitialState: function (data) {

    //     // TODO
    //     // we need to query db and return two arrays
    //     // one for users and one for admins
    //     // then we need to populate a map object with 2 different
    //     // colored pins based on user/admin
    //     // return {TODO};

    //     return {data};
    // },


    // Here we describe this component's render method
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="map-view">
                            put map here with one color of Markers for Admins
                            and one color for Users
                            Markers are associated with table items below
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="table col-md-6">
                        {/* table of Admins*/}
                        <table>
                        </table>
                    </div>
                    <div className="table col-md-6">
                        {/* table of Users*/}
                        <table>
                        </table>
                    </div>
                </div>
            </div>
        );

    }
}