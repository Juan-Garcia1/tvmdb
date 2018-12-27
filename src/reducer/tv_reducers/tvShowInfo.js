import { GET_TV_SHOW_INFO } from "../../actions/types";

const initialState = {
  tvShowInfo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TV_SHOW_INFO:
      return {
        ...state,
        tvShowInfo: action.payload
      };
    default:
      return state;
  }
}
