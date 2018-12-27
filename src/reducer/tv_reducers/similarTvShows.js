import { GET_SIMILAR_TV_SHOWS } from "../../actions/types";

const initialState = {
  similarTvShows: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SIMILAR_TV_SHOWS:
      return {
        ...state,
        similarTvShows: action.payload
      };
    default:
      return state;
  }
}
