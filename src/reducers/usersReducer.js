import { GET_USERS_FAILED, GET_USERS_SUCCESS, IS_LOGGED_IN } from "../actions/actions";

const initialState = {
  get_users: [],
  user_authorized: "",
  error: "",
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      let newUsersList = [];
      let items = action.payload;
      for (let item in items) {
        newUsersList.push({
          id: item,
          email: items[item].email,
          password: items[item].password,
        });
      }
      return { ...state, get_users: newUsersList };

    case GET_USERS_FAILED:
      return { ...state, error: action.payload };

    case IS_LOGGED_IN:
      return { ...state, is_logged_in: action.payload };

    default:
      return state;
  }
}

export default usersReducer;