import { types } from "./types";
import http from "../../utils/axios";
import NotificationManager from "react-notifications/lib/NotificationManager";

export const loginRequest = (payload) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST, payload: true });
    // eslint-disable-next-line no-unused-vars
    const res = await http.post("/api/auth/login/", payload);
    const { token } = res.data;
    localStorage.setItem("AuthToken", token);
    NotificationManager.success("Logged in successfuly");
    setTimeout(() => {
      window.location.assign("/play");
    }, 1000);
  } catch (error) {
    NotificationManager.error(
      error.response?.data?.error || "Something went wrong"
    );
  }
  dispatch({ type: types.LOGIN_REQUEST, payload: false });
};
export const signupRequest = (payload) => async (dispatch) => {
  try {
    dispatch({ type: types.SIGNUP_REQUEST, payload: true });
    // eslint-disable-next-line no-unused-vars
    const res = await http.post("/api/auth/register/", payload);
    NotificationManager.success("Account created successfuly");
    const { token } = res.data;
    localStorage.setItem("AuthToken", token);
    setTimeout(() => {
      window.location.assign("/play");
    }, 1000);
  } catch (error) {
    NotificationManager.error(
      error.response?.data?.error || "Something went wrong"
    );
  }
  dispatch({ type: types.SIGNUP_REQUEST, payload: false });
};

export const authRequest = () => async (dispatch) => {
  dispatch({ type: types.CHECK_AUTH_REQUEST_LOADING, payload: true });
  try {
    const res = await http.get("/api/auth/check-login/");
    const { user } = res.data;
    dispatch({ type: types.CHECK_AUTH_REQUEST, payload: user });
  } catch (error) {
    window.location.assign("/auth");
  }
  dispatch({ type: types.CHECK_AUTH_REQUEST_LOADING, payload: false });
};
export const logoutRequest = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOGOUT_REQUEST });
    localStorage.clear();
    window.location.reload(true);
  } catch (error) {
    window.location.assign("/auth");
  }
};
