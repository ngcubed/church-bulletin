import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Program from './components/program/program';
import './App.css';

const App = () => {

  let routes = (
    <div className="app">
      <Route path="/" exact component={Program}/>
    </div>
  );

  return (
    <HashRouter>
      {routes}
    </HashRouter>
  );
}

export default App;
