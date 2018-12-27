import { GET_CONFIG } from "../actions/types";

const initialState = {
  config: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONFIG:
      return {
        ...state,
        config: action.payload
      };
    default:
      return state;
  }
}
