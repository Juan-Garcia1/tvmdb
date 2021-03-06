import { GET_NOW_PLAYING } from "../../actions/types";

const initialState = {
  nowPlaying: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload
      };
    default:
      return state;
  }
}
