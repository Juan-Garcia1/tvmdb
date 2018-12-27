import { GET_TOP_RATED_MOVIES } from "../../actions/types";

const initialState = {
  topRatedMovies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload
      };

    default:
      return state;
  }
}
