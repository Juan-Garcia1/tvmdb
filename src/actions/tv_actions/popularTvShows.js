import axios from "axios";

import { GET_POPULAR_TV_SHOWS } from "../types";

export const getPopularTvShows = () => dispatch => {
  axios.get("/.netlify/functions/getPopularTvShows").then(res =>
    dispatch({
      type: GET_POPULAR_TV_SHOWS,
      payload: res.data
    })
  );
};
