import { types } from "../actions/types";

const initialState = {
  isLoading: false,
  leaders: [],
};

export const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LEADERBOARD_REQUEST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.LEADERBOARD_REQUEST:
      return {
        ...state,
        leaders: action.payload,
      };
    default:
      return state;
  }
};

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SCORE_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
