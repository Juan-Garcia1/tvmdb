import { GET_MOVIE_INFO } from "../../actions/types";

const initialState = {
  movieInfo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_INFO:
      return {
        ...state,
        movieInfo: action.payload
      };
    default:
      return state;
  }
}
