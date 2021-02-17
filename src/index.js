import React from 'react';
import ReactDOM from 'react-dom';
import history from './history'
import { Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
