import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { App, Consumer } from './containers/App';
import Counter from './components/Counter';

ReactDOM.render(
  <App>
    <Consumer>
    	{ (context) => <Counter {...context} /> }
    </Consumer>
  </App>,
  document.getElementById('root')
);

registerServiceWorker();