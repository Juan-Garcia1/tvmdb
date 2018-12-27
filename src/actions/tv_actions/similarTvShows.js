import axios from "axios";

import { GET_SIMILAR_TV_SHOWS } from "../types";

export const getSimilarTvShows = id => dispatch => {
  axios.get(`/.netlify/functions/getSimilarTvShows?id=${id}`).then(res =>
    dispatch({
      type: GET_SIMILAR_TV_SHOWS,
      payload: res.data
    })
  );
};
