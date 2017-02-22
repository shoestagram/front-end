import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Media from './components/Media';

// - MH ----------------------------------
import Login from './components/Login'
import Profile from './components/Profile'
import AuthService from './utils/AuthService'
const auth = new AuthService('pKH0zA7lEp39fr7ERuMpeEGf3HbDhWI2', 'bertha.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

// - MH ----------------------------------



const routes = (
    <Router history={ browserHistory }>
        <Route path="/" component={ App } auth={auth}>
            <Route path="login" component={Login} />
            <Route path="profile" component={Profile} onEnter={requireAuth} />
            <IndexRoute component={ Home } onEnter={requireAuth} />
            <Route path="/media/" component={Media} onEnter={requireAuth} />
        </Route>
    </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);


// import IndexRoute from 'react-router'
//            <IndexRoute component={Home}/>
//               <Route path="medias/:id" component={Product}>
//                 <Route path="instore" component={InStore} />
//                 <Route path="online" component={Online} />
//               </Route>
