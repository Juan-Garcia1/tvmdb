import { GET_SIMILAR_MOVIES } from "../../actions/types";

const initialState = {
  similarMovies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload
      };
    default:
      return state;
  }
}
