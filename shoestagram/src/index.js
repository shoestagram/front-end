import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Media from './components/Media';


const routes = (
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Home } />
            <Route path="/medias/" component={Media}/>
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