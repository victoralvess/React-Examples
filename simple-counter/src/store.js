import { createStore } from 'redux';

import counterApp from './reducers';

const store = createStore(counterApp);

export default store;