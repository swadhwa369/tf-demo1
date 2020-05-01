import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Pose from './components/Pose'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Pose} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
