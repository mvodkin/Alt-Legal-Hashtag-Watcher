const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const UserReducer = (state = _nullUser, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default UserReducer;
