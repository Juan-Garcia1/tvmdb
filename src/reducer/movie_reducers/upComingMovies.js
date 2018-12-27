import { GET_UPCOMING_MOVIES } from "../../actions/types";

const initialState = {
  upComingMovies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upComingMovies: action.payload
      };
    default:
      return state;
  }
}
