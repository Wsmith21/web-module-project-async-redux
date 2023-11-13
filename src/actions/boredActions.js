// boredActions.js
import axios from "axios";
import {
  FETCH_BORED_REQUEST,
  FETCH_BORED_SUCCESS,
  FETCH_BORED_FAILURE,
} from "./types";

export const fetchBoredRequest = () => ({
  type: FETCH_BORED_REQUEST,
});

export const fetchBoredSuccess = (data) => ({
  type: FETCH_BORED_SUCCESS,
  payload: data,
});

export const fetchBoredFailure = (error) => ({
  type: FETCH_BORED_FAILURE,
  payload: error,
});

export const fetchBoredActivity = (queryParams) => {
  return async (dispatch) => {
    dispatch(fetchBoredRequest());
    try {
      let url = "https://www.boredapi.com/api/activity/";

      if (queryParams) {
        url += "?" + new URLSearchParams(queryParams).toString();
      }

      const response = await axios.get(url);
      const data = response.data;
      dispatch(fetchBoredSuccess(data));
    } catch (error) {
      dispatch(fetchBoredFailure(error.message));
    }
  };
};
