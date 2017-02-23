import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import tweetReducer from "./tweet_reducer";

export default combineReducers({
  user: userReducer,
  tweets: tweetReducer
});
