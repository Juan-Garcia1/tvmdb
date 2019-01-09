import { GET_RECOMMENDED_TV_SHOWS } from "../../actions/types";

const initialState = {
  recommendedTvShows: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECOMMENDED_TV_SHOWS:
      return {
        ...state,
        recommendedTvShows: action.payload
      };
    default:
      return state;
  }
}
