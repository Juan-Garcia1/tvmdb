import { GET_TV_SHOWS_AIRING_TODAY } from "../../actions/types";

const initialState = {
  tvShowsAiringToday: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TV_SHOWS_AIRING_TODAY:
      return {
        ...state,
        tvShowsAiringToday: action.payload
      };
    default:
      return state;
  }
}
