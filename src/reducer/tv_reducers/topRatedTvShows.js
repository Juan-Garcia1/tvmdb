import { GET_TOP_RATED_TV_SHOWS } from "../../actions/types";

const initialState = {
  topRatedTvShows: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_RATED_TV_SHOWS:
      return {
        ...state,
        topRatedTvShows: action.payload
      };
    default:
      return state;
  }
}
