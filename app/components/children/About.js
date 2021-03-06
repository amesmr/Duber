"use strict";

// Include React
import React from "react"

// Create the Child Component

export default class About extends React.Component {

    // // Child has a state
    // getInitialState: function(data) {
    //     return {data};
    // },

    render() {
        return (
            <div className = "panel panel-default" >
            <div className = "panel-heading" >
            <h3 className = "panel-title" > About Us </h3>
            </div>
            <div className = "panel-body text-center" >
            <p>

            We are the Transport
            for Rescue Animals Network.This is designed to be a national database where any animal in
            need of transport to their new, forever home.If you would like to volunteer your time to help on a leg of one of our animal 's journey, please sign up and we'
            ll be happy to get you set up to help a loving animal in need!
                         {
                /*
                              Here we create a button with an onClick event listener.
                              Note how we have an onClick event associated with our handleClick function.
                            */
            }
            { /*<button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>*/ }
            </p>
            </div>
            <div className = "panel-body text-center" > { /* Here we create a button to take us to the Donation link. */ }
            <button className = "btn btn-danger btn-lg danger donation"
            onClick = { this.resetClick } > Donate </button>
            </div>
            </div>
        );
    }
}