import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import * as reducer from "./reducer.js";

const store = createStore(reducer.default, applyMiddleware(thunk));
export default store;
