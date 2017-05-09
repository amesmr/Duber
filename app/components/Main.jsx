"use strict";
// Include React
import React, { Component, PropTypes } from 'react';


// Reference the high-level components
// import AdminLogin from "./children/AdminLogin"
import AdminSignup from "./children/AdminSignup.jsx"
import AdminMap from "./children/AdminMap.jsx"
// import Animals from "./children/Animals.jsx"
// import About from './children/About.jsx'

// Helper for making AJAX requests to our API
import helpers from "./utils/helpers.jsx"

// Creating the Main component

  // TODO
  // figure out what needs to be set in this initial state
export default class Main extends React.Component {
    //     getInitialState: function () {
    //     // This ain't it
    //     // return { searchTerm: "", results: "", history: [] };
    //   },

    //   // The moment the page renders get the History
    //   componentDidMount: function() {

    //   },

    //   // If the component changes (i.e. if a search is entered)...
    //   componentDidUpdate: function() {

    //     // Run the query for the address
    //     helpers.runQuery(this.state.searchTerm).then(function(data) {
    //       if (data !== this.state.results) {
    //         console.log("Address", data);
    //         this.setState({ results: data });

    //         // After we've received the result... then post the search term to our history.
    //         helpers.postHistory(this.state.searchTerm).then(function() {
    //           console.log("Updated!");

    //           // After we've done the post... then get the updated history
    //           helpers.getHistory().then(function(response) {
    //             console.log("Current History", response.data);

    //             console.log("History", response.data);

    //             this.setState({ history: response.data });

    //           }.bind(this));
    //         }.bind(this));
    //       }
    //     }.bind(this));
    //   },
    //   // This function allows childrens to update the parent.
    //   setTerm: function(term) {
    //     this.setState({ searchTerm: term });
    //   },
    // Here we render the function
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="jumbotron">
                            <h2> className="text-center">TRAN (Transport Animal Rescue Network)</h2>
                        </div>
                    </div>
                </div>
                <div className="container" id="main-content">
                </div>
                <a href="adminSignup"> Admin Signup</a>
                <div className="row">
                    <About />
                </div>
            </div>
        );
    }
}
