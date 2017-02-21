import {RECEIVE_LOGOUT} from "../actions/actions"

const _nullUser = Object.freeze({
  user: null,
});

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
