import {createStore, combineReducers, applyMiddleware} from 'redux';
import {common} from './reducers/common';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({
    common,
  }),
  applyMiddleware(thunk)//action 里处理异步,要用 redux-thunk
);
export default store;