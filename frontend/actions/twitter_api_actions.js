import fetch from "isomorphic-fetch";


export const REQUEST_TWEETS = "REQUEST_TWEETS";
const requestTweets = (hashtag) => ({
  type: REQUEST_TWEETS,
  hashtag
});

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
const receiveTweets = (json, hashtag, numberOfTweets) => ({
  type: RECEIVE_TWEETS,
  json,
  hashtag,
  numberOfTweets
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
  dispatch(requestTweets(params.hashtag));
  fetch(`/api/tweets?${buildQueryString(params)}`)
    .then(response => response.json())
    .then(json => dispatch(receiveTweets(json, params.hashtag, params.number_of_tweets)))
    .catch(error => console.log(error));
}
