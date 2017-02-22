// import * as ApiUtil from "../util/api_util";
import fetch from "isomorphic-fetch";

export const REQUEST_CURRENT_USER = "REQUEST_CURRENT_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const REMOVE_HASHTAG = "REMOVE_HASHTAG";

export const RECEIVE_LOGOUT = "LOGOUT";
const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});

export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
const requestLogout = () => ({
  type: REQUEST_LOGOUT
});

export const fetchLogout = () => dispatch => {
  dispatch(requestLogout());
  fetch("/logout")
    .then(() => dispatch(receiveLogout()))
    .catch(error => console.log(error));
};


export const ADD_HASHTAG = "ADD_HASHTAG";
const requestAddHashtag = (text, userId) => ({
  type: ADD_HASHTAG,
  text,
  userId
});

export const RECEIVE_HASHTAG = "RECEIVE_HASHTAG";
const receiveHashtag = (json) => ({
  type: RECEIVE_HASHTAG,
  json
});

export const fetchAddHashtag = (text, userId) => dispatch => {
  dispatch(requestAddHashtag(text, userId));
  fetch(`api/hashtags?text=${text}&user_id=${userId}`, {method: "POST"})
    .then(response => response.json())
    .then(json => dispatch(receiveHashtag(json)))
    .catch(error => console.log(error))
};

export const REQUEST_DELETE_HASHTAG = "REQUEST_DELETE_HASHTAG";
const requestDeleteHashtag = (hashtagId) => ({
  type: REQUEST_DELETE_HASHTAG,
  hashtagId
});

export const RECEIVE_DELETE_HASHTAG = "RECEIVE_DELETE_HASHTAG";
const receiveDeleteHashtag = (json) => ({
  type: RECEIVE_DELETE_HASHTAG,
  json
})

export const fetchDeleteHashtag = (hashtagId) => dispatch => {
  dispatch(requestDeleteHashtag(hashtagId));
  fetch(`api/hashtags/${hashtagId}`, {method: "DELETE"})
    .then(response => response.json())
    .then(json => dispatch(receiveDeleteHashtag(json)))
    .catch(error => console.log(error));
}
