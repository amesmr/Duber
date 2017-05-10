"use strict";
// Include React
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// Reference the high-level components
// import AdminLogin from "./children/AdminLogin"
import AdminSignup from "./children/AdminSignup.jsx"
import AdminMap from "./children/AdminMap.jsx"
// import Animals from "./children/Animals.jsx"
import About from './children/About.jsx'

// Helper for making AJAX requests to our API
import helpers from "./utils/helpers.jsx"

  // TODO
  // figure out what needs to be set in this initial state

export default class Main extends React.Component {
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
                <div className="links">
                    <ul role="nav">
                        <li><Link to="/adminSignup">About</Link></li>
                        <li><Link to="/adminMap">AdminMap</Link></li>
                    </ul>

                </div>
                <div className="container" id="main-content">
                    {this.props.children}
                </div>
                <div className="row">
                    <About />
                </div>
            </div>
        )
    }
}
