

import { test } from './test';

import { combineReducers, createStore } from 'redux';

let reducer = combineReducers({ test/*,test2,test3*/ });

const store = createStore(reducer);

export default store;
