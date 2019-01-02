import { GET_MOVIE_GENRES } from "../../actions/types";

const initialState = {
  movieGenres: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_GENRES:
      return {
        ...state,
        movieGenres: action.payload
      }
    default:
      return state
  }
}