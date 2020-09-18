import React, {Modal} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Set3 from './Set3';
import Set4 from './Set4'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>

        <Switch>
          <Route exact path="/">
            <Set4 />
          </Route>
          <Route exact path="/tft-encyclopedia">
            <Set4 />
          </Route>
          <Route path="/set3">
            <Set3 />
          </Route>
        </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


