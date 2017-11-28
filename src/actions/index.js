
const fetchUserList = {
  type: "FETCH_USER_LIST",
  payload: {}
};

const fetchUserListSuccess = users => ({
  type: "FETCH_USER_LIST_SUCCESS",
  payload: {
    users
  }
});

const moveToCreationPage = {
  type: "MOVE_TO_CREATION_PAGE",
  payload: {}
};
const moveBackToListPage = {
  type: "MOVE_BACK_TO_LIST_PAGE",
  payload: {}
};

const createUser = {
  type: "CREATE_USER",
  payload: {}
};
const createUserSuccess = {
  type: "CREATE_USER_SUCCESS",
  payload: {}
};

const refresh = {
  type: "REFRESH",
  payload: {}
};
const actions = {
  fetchUserList,
  fetchUserListSuccess,
  moveToCreationPage,
  createUser,
  createUserSuccess,
  moveBackToListPage,
  refresh
};

export default actions;