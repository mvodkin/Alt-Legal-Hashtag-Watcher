import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer";
import thunkMiddleware from "redux-thunk";

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )
);

export default configureStore;
