import axios from "axios";

import { GET_TV_SHOWS_AIRING_TODAY } from "../types";

export const getTvShowsAiringToday = () => dispatch => {
  axios.get("/.netlify/functions/getTvShowsAiringToday").then(res =>
    dispatch({
      type: GET_TV_SHOWS_AIRING_TODAY,
      payload: res.data
    })
  );
};
