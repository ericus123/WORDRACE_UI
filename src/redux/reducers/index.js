import { combineReducers } from "redux";
import {
  loginReducer,
  signupReducer,
  CheckAuthReducer,
  logoutReducer,
} from "./auth";
import { leaderboardReducer, scoreReducer } from "./scores";

const allReducers = combineReducers({
  signupReducer,
  loginReducer,
  logoutReducer,
  CheckAuthReducer,
  leaderboardReducer,
  scoreReducer,
});

export default allReducers;
