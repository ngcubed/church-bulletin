import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Program from './components/program/program';
import './App.css';
import AdminAuth from './components/admin/adminAuth';

const App = () => {

  let routes = (
    <div className="app">
      <Route path="/" exact component={Program} />
      <Route path='/admin/' exact component={AdminAuth} />
    </div>
  );

  return (
    <HashRouter>
      {routes}
    </HashRouter>
  );
}

export default App;
