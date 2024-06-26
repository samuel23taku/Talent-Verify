import * as actions from "./actions.js";
import { combineReducers } from 'redux';

const initialState = {
  items: [],
  loading: false,
  errors: null,
};
const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actions.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default combineReducers({
    items: applicationReducer,
  });