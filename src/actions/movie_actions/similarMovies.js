import axios from "axios";

import { GET_SIMILAR_MOVIES } from "../types";

export const getSimilarMovies = id => dispatch => {
  axios.get(`/.netlify/functions/getSimilarMovies?id=${id}`).then(res =>
    dispatch({
      type: GET_SIMILAR_MOVIES,
      payload: res.data
    })
  );
};
