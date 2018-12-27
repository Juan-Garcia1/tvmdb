import { GET_TV_SHOW_CREDITS } from "../../actions/types";

const initialState = {
  tvShowCredits: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TV_SHOW_CREDITS:
      return {
        ...state,
        tvShowCredits: action.payload
      };
    default:
      return state;
  }
}
