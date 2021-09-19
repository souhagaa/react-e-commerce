import React, { useReducer } from "react";

import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../types";
import { USERS_URL, LOGIN_URL } from "../../utils/urls";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: [],
    isAuthenticated: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user check which user is logged in and get it

  const loadUser = async (username) => {
    // load token into headers
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get(USERS_URL);

      const userData = res.data.filter((user) => user.username === username);
      dispatch({
        type: USER_LOADED,
        payload: userData[0],
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Login user

  const loginUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(LOGIN_URL, formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });

      loadUser(formData.username);
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Logout user

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        loadUser,
        loginUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
