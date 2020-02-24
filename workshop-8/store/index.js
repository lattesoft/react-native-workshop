import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);
