import { GET_POPULAR_TV_SHOWS } from "../../actions/types";

const initialState = {
  popularTvShows: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR_TV_SHOWS:
      return {
        ...state,
        popularTvShows: action.payload
      };
    default:
      return state;
  }
}
