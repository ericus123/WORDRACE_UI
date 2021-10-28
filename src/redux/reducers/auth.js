import { types } from "../actions/types";

const initialState = {
  isLoading: false,
  user: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export const CheckAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_AUTH_REQUEST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.CHECK_AUTH_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGOUT_REQUEST:
      return {
        user: null,
      };
    default:
      return state;
  }
};
