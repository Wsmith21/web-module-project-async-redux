// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import boredReducer from "./reducers/boredReducer";
import "./index.css";
import App from "./App";

// Define a simple thunk middleware
const thunk = (store) => (next) => (action) =>
  typeof action === "function" ? action(store.dispatch, store.getState) : next(action);

const store = createStore(boredReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
