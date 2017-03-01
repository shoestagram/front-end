import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory, } from 'react-router';
import Media from './components/Media';

// - MH ----------------------------------
import Login from './components/Login';
import Profile from './components/Profile';
import About from './components/About';
import AuthService from './utils/AuthService';
const auth = new AuthService('pKH0zA7lEp39fr7ERuMpeEGf3HbDhWI2', 'bertha.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
};

// - MH ----------------------------------


const routes = (
    <Router history={ browserHistory }>
        <Route path="/" component={ App } auth={auth} />
        <Route path="/login" component={ Login } auth={auth} />
        <Route path="/profile" component={ Profile } onEnter={requireAuth} auth={auth} />
        <Route path="/media/:id" component={ Media } onEnter={requireAuth} auth={auth} />
        <Route path="/about" component={ About } />
    </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
