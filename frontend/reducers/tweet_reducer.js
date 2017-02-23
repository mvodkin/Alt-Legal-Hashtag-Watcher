import {RECEIVE_TWEETS, REQUEST_TWEETS} from "../actions/twitter_api_actions";

const tweetReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      const { hashtag, json } = action;
      const obj = {}
      obj[hashtag] = json;
      return Object.assign({}, state, obj);
    default:
      return state;

  }
}

export default tweetReducer;
