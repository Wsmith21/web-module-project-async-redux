// boredReducer.js
import {
    FETCH_BORED_REQUEST,
    FETCH_BORED_SUCCESS,
    FETCH_BORED_FAILURE,
  } from "../actions/types";
  
  const initialState = {
    loading: false,
    boredActivity: {},
    error: "",
  };
  
  const boredReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BORED_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_BORED_SUCCESS:
        return {
          loading: false,
          boredActivity: action.payload,
          error: "",
        };
      case FETCH_BORED_FAILURE:
        return {
          loading: false,
          boredActivity: {},
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default boredReducer; // Fix the export statement
  