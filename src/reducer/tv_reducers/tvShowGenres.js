import { GET_TV_SHOW_GENRES } from "../../actions/types";

const initialState = {
  tvShowGenres: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TV_SHOW_GENRES:
      return {
        ...state,
        tvShowGenres: action.payload
      }
    default:
      return state
  }
}