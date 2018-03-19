import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { App, Consumer } from './containers/App';
import CounterCard from './components/CounterCard';

ReactDOM.render(
  <App>
    <Consumer>
    	{ (context) => <CounterCard {...context} /> }
    </Consumer>
  </App>,
  document.getElementById('root')
);

registerServiceWorker();