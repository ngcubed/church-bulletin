import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Program from './components/program/program';
import Login from './components/admin/login';
import Dashboard from './components/admin/dashboard';
import SecureRoute from './components/shared/secure-route';
import './App.css';

const App = () => {
  
  let routes = (
    <div className="app">
      <Switch>
        <Route path="/" exact component={Program} />
        <Route path='/login' exact component={Login} />
        <SecureRoute path='/dashboard' exact component={Dashboard} />
      </Switch>
    </div>
  );

  return (
    <HashRouter>
      {routes}
    </HashRouter>
  );
}

export default App;
