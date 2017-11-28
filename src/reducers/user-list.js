
const userList = (state = initialState, { type, payload }) => {
  switch (type) {
  case "FETCH_USER_LIST":
    return {
      ...state,
      loaded: false,
      error: false,
    };
  case "FETCH_USER_LIST_SUCCESS":
    return {
      ...state,
      loaded: true,
      users: payload.users,
    };
  case "FETCH_USER_LIST_FAILED":
    return {
      ...state,
      error: true,
    };
  case "CREATE_USER":
    return {
      ...state,
      loaded: false,
    };
  case "CREATE_USER_SUCCESS":
    return {
      ...state,
      loaded: true,
    };
  case "MOVE_TO_CREATION_PAGE":
    return {
      ...state,
      isOpen: true,
    };
  case "MOVE_BACK_TO_LIST_PAGE":
    return {
      ...state,
      isOpen: false,
    };
  case "REFRESH":
    return {
      laoded: false,
      users: {}
    };
  default:
    return state;
  }
};

const initialState = {
  type: "",
  payload: {
    user: {}
  }
};

export default userList;