import axios from "axios";

import { GET_TV_SHOW_CREDITS } from "../types";

export const getTvShowCredits = id => dispatch => {
  axios.get(`/.netlify/functions/getTvShowCredits?id=${id}`).then(res =>
    dispatch({
      type: GET_TV_SHOW_CREDITS,
      payload: res.data
    })
  );
};
