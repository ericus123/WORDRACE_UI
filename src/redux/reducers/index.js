import { combineReducers } from "redux";
import { loginReducer, signupReducer, CheckAuthReducer } from "./auth";

const allReducers = combineReducers({
  signupReducer,
  loginReducer,
  CheckAuthReducer,
});

export default allReducers;
