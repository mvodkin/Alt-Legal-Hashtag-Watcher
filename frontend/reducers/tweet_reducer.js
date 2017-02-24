import {RECEIVE_TWEETS, REQUEST_TWEETS} from "../actions/twitter_api_actions";

const tweetReducer = (state = {}, action) => {
  const obj = {}

  switch (action.type) {
    case RECEIVE_TWEETS:
      const { hashtag, json } = action;
      obj[action.hashtag] = {}
      obj[hashtag].items = json;
      obj[hashtag].isFetching = false;
      return Object.assign({}, state, obj);
    case REQUEST_TWEETS:
      obj[action.hashtag] = {}
      obj[action.hashtag].isFetching = true;
      return Object.assign({}, state, obj)
    default:
      return state;

  }
}

export default tweetReducer;
