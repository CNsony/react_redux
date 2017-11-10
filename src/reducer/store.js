/**
 * Created by scai051 on 10/24/2017.
 */
import { createStore } from 'redux';
import reducers from './reducers.js';

const store = createStore(reducers);
export default store;