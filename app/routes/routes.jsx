// Include the React library
import React, { Component, PropTypes } from 'react'
// Include the react-router module with Route and Router
import router, {Route, Router, hashHistory, IndexRoute} from 'react-router'

// // Include the IndexRoute (catch-all route)
// var IndexRoute = router.IndexRoute;

// Reference the high-level components
import Main from "../components/Main.jsx"
// import AdminLogin from "../components/children/AdminLogin.jsx"
import AdminSignup from "../components/children/AdminSignup.jsx"
import AdminMap from "../components/children/AdminMap.jsx"
// import About from '../components/children/About.jsx'


var routes =  (
  // The high level component is the Router component
    <Router history={hashHistory}>
            <Route path="/" component={Main}>

            {/* show the appropriate component */}
            {/*<Route path="adminLogin/" component={AdminLogin} />*/}
            <Route path="adminSignup/" component={AdminSignup} />
            <Route path="adminMaps/" component={AdminMap} />

            {/* set the default route here*/}
            <IndexRoute component={AdminSignup} />
            </Route>
    </Router>
)
export default routes


