import React from "react";
import reactDOM from "react-dom";

import App from "./components/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import rootReducer from "./reducers/index";

export const store = createStore(rootReducer, applyMiddleware(Thunk));

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
