//Libraries
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';

// Components
import app from 'app';
import Main from './components/Main';
import AdminLogin from './components/children/AdminLogin';
import About from './components/children/About';
import Animals from './components/children/Animals';
import AdminSignup from './components/children/AdminSignup';

const routes = (
    /*<BrowserRouter basename={"/"} >
        <Main/>
    </BrowserRouter>*/
     <Router history={browserHistory}>
       <Route component={app}>
        <Route path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/adminsignup" component={AdminSignup} />
        <Route path="/adminmap" component={AdminMap} />
        <Route path="/animals" component={Animals} />
       </Route> 
    </Router>
)
export default routes;