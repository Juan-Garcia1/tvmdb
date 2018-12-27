import axios from "axios";

import { GET_TOP_RATED_TV_SHOWS } from "../types";

export const getTopRatedTvShows = () => dispatch => {
  axios.get("/.netlify/functions/getTopRatedTvShows").then(res =>
    dispatch({
      type: GET_TOP_RATED_TV_SHOWS,
      payload: res.data
    })
  );
};
