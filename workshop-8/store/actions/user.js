import { USER_LOGIN, USER_LOGOUT } from "../actionType";

export const setLogin = profile => dispatch => {
  dispatch({ type: USER_LOGIN, payload: profile });
};

export const setLogout = profile => dispatch => {
  dispatch({ type: USER_LOGOUT });
};
