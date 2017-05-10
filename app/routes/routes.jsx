import React, { Component, PropTypes } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Main from "../components/Main.jsx"

var routes = (
    <BrowserRouter basename={"/"} >
        <Main/>
    </BrowserRouter>
)
export default routes