// import * as ApiUtil from "../util/api_util";
import fetch from "isomorphic-fetch";

export const REQUEST_CURRENT_USER = "REQUEST_CURRENT_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const RECEIVE_LOGOUT = "LOGOUT";

export const ADD_HASHTAG = "ADD_HASHTAG";
export const RECEIVE_HASHTAG = "RECEIVE_HASHTAG";
export const REMOVE_HASHTAG = "REMOVE_HASHTAG";

const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});

const requestLogout = () => ({
  type: REQUEST_LOGOUT
});

export const fetchLogout = () => dispatch => {
  dispatch(requestLogout());
  fetch("/logout")
    .then(() => dispatch(receiveLogout()))
    .catch(error => console.log(error));
};


export const addHashtag = () => ({
  type: ADD_HASHTAG,
  text,
  user_id
});
