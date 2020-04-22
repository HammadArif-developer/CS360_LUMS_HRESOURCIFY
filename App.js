import React from 'react';
import './App.css';
import './components/util.css';
import Login from './components/login/login';
import Loading from './components/loading/loading';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path = "/" component={Login} />
      <Route exact path = "/loading" component={Loading}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
