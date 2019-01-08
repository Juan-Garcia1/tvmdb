import axios from "axios";

import { GET_RECOMMENDED_TV_SHOWS } from "../types";

export const getRecommendedTvShows = id => dispatch => {
  axios.get(`/.netlify/functions/getRecommendedTvShows?id=${id}`).then(res =>
    dispatch({
      type: GET_RECOMMENDED_TV_SHOWS,
      payload: res.data
    })
  );
};
