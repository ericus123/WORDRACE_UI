import { types } from "./types";
import http from "../../utils/axios";
import NotificationManager from "react-notifications/lib/NotificationManager";

export const leaderboardRequest = () => async (dispatch) => {
  dispatch({ type: types.LEADERBOARD_REQUEST_LOADING, payload: true });
  try {
    const res = await http.get("/api/leaderboard");
    const { leaders } = res.data;
    dispatch({ type: types.LEADERBOARD_REQUEST, payload: leaders });
  } catch (error) {
    NotificationManager.error("Something went wrong", "ERROR");
  }
  dispatch({ type: types.LEADERBOARD_REQUEST_LOADING, payload: false });
};

export const scoreRequest = (payload) => async (dispatch) => {
  dispatch({ type: types.SCORE_REQUEST, payload: true });
  try {
    // eslint-disable-next-line no-unused-vars
    const res = await http.post("/api/scores", payload);
    NotificationManager.success("This level is saved succesfuly", "SAVED");
    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  } catch (error) {
    NotificationManager.error("Something went wrong", "ERROR");
  }
  dispatch({ type: types.SCORE_REQUEST, payload: false });
};
