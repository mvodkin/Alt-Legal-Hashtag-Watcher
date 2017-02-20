import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");

  let store;
  let initialState = {}

  if (window.currentUser) {
    initialState = {user: window.currentUser};
  }

  store = configureStore(initialState);

  window.store = store

  ReactDom.render(<App store={store}/>, root)
});
