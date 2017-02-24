import {
  RECEIVE_LOGOUT,
  RECEIVE_HASHTAG,
  RECEIVE_DELETE_HASHTAG,
} from "../actions/actions"


const concatOrOverwriteHashtag = (hashtagsArray, newHashtag) => {

  const dupArr = hashtagsArray.slice(0)

  for (let i = 0; i < dupArr.length; i++) {
    if (dupArr[i].id === newHashtag.id) {
      dupArr[i] = newHashtag;
      return dupArr;
    }
  }

  return hashtagsArray.concat(newHashtag)
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LOGOUT:
      return {};
    case RECEIVE_HASHTAG:

      return Object.assign({}, state, {
        hashtags: concatOrOverwriteHashtag(state.hashtags, action.json)
      });
    case RECEIVE_DELETE_HASHTAG:
      let newHashtags = state.hashtags;
      let deleteIndex;

      newHashtags.forEach((el, idx) => {
        if (action.json.id === el.id) {
          deleteIndex = idx;
        }
      })

      newHashtags.splice(deleteIndex, 1);
      return Object.assign({}, state, {
        hashtags: newHashtags
      });
    default:
      return state;
  }
};

export default userReducer;
