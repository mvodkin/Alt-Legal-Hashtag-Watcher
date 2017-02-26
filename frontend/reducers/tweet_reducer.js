import {RECEIVE_TWEETS, REQUEST_TWEETS} from "../actions/twitter_api_actions";

const tweetReducer = (state = {}, action) => {
  const obj = {}

  const combineTweets = (items, json, numberOfTweets) => {

    if (items && json.length > 0) {
      return json.concat(items).slice(0, numberOfTweets);
    } else if (items && json.length === 0) {
      return items.slice(0, numberOfTweets);
    } else if (json.length > 0) {
      return json.slice(0, numberOfTweets);
    }
  }

  switch (action.type) {
    case RECEIVE_TWEETS:
      const { hashtag, json, numberOfTweets } = action;
      obj[hashtag] = {}
      obj[hashtag].items = combineTweets(
        state[hashtag].items,
        json,
        numberOfTweets
      );
      obj[hashtag].isFetching = false;
      return Object.assign({}, state, obj)
    case REQUEST_TWEETS:
      obj[action.hashtag] = Object.assign({}, state[action.hashtag], { isFetching: true })
      return Object.assign({}, state, obj)
    default:
      return state;

  }
}

export default tweetReducer;
