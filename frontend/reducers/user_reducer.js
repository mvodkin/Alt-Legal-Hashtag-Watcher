import {
  RECEIVE_LOGOUT,
  RECEIVE_HASHTAG
} from "../actions/actions"

const _nullUser = Object.freeze({
  user: null,
});

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LOGOUT:
      return {};
    case RECEIVE_HASHTAG:
      return Object.assign({}, state, {
        hashtags: state.hashtags.concat(action.json)
      })
    default:
      return state;
  }
};

export default userReducer;
