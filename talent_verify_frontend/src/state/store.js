import {  applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer,
    middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });

export default store;
