import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './pages/Detail';
import List from './pages/List';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';




ReactDOM.render(
    <Router>
      <Route path='/' component={ List }/> 
      <Route path='/react' component={ Detail }/>
    </Router>
    , document.getElementById('app'));