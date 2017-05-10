import { React } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'

import { Main } from "../components/Main.jsx"

render((
    <Router history={hashHistory} router={routes}>
        <Route path="/" component={Main}>
        </Route>
  </Router>
), document.getElementById("app"))