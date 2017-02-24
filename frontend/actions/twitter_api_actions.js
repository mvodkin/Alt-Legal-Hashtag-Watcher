import fetch from "isomorphic-fetch";


export const REQUEST_TWEETS = "REQUEST_TWEETS";
const requestTweets = () => ({
  type: REQUEST_TWEETS
});

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
const receiveTweets = (json, hashtag) => ({
  type: RECEIVE_TWEETS,
  json,
  hashtag
});

const buildQueryString = (object) => {
  let params = [];
  for (let key in object) {
    params.push(key + "=" + object[key])
  }
  return params.join("&");
}

const setTweetWidth = () => {
  
}

export const fetchSearchTweets = (params) => dispatch => {
  dispatch(requestTweets());
  fetch(`/api/tweets?${buildQueryString(params)}`)
    .then(response => response.json())
    .then(json => dispatch(receiveTweets(json, params.hashtag)))
    .catch(error => console.log(error));
}
