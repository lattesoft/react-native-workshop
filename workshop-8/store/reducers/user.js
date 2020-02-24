import { USER_LOGIN, USER_LOGOUT } from "../actionType";

const initialState = {
  isLogin: false,
  profile: {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: ""
  }
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, profile: payload, isLogin: true };

    case USER_LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};
