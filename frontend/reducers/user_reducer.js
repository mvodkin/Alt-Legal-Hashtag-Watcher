import {
  RECEIVE_LOGOUT,
  RECEIVE_HASHTAG,
  RECEIVE_DELETE_HASHTAG,
} from "../actions/actions"

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LOGOUT:
      return {};
    case RECEIVE_HASHTAG:
      return Object.assign({}, state, {
        hashtags: state.hashtags.concat(action.json)
      });
    case RECEIVE_DELETE_HASHTAG:
      let newHashtags = state.hashtags;
      let deleteIndex = newHashtags.indexOf(action.json)
      newHashtags.splice(deleteIndex, 1);
      return Object.assign({}, state, {
        hashtags: newHashtags
      });
    default:
      return state;
  }
};

export default userReducer;
