import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';

import Background from './components/Background/Background';
// import Nav from './components/Nav/Nav';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Background url="http://localhost:8080/api/background" />
      {/*      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route>
          <Library />
        </Route>
        <Route>
          <Settings />
        </Route>
      </Switch>
*/}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
