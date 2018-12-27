import { GET_MOVIE_CREDITS } from "../../actions/types";

const initialState = {
  movieCredits: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_CREDITS:
      return {
        ...state,
        movieCredits: action.payload
      };
    default:
      return state;
  }
}
