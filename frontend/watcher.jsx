import React from "react";
import ReactDom from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { fetchSearchTweets } from "./actions/twitter_api_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");

  let store;
  let initialState = {}

  if (window.currentUser) {
    initialState = {user: window.currentUser};
  }

  store = configureStore(initialState);

  store.dispatch(fetchSearchTweets({
    id: "6",
    hashtag: "banana"
  }))

  window.store = store

  ReactDom.render(<Root store={store}/>, root)
});
