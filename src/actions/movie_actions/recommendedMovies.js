import axios from "axios";

import { GET_RECOMMENDED_MOVIES } from "../types";

export const getRecommendedMovies = id => dispatch => {
  axios.get(`/.netlify/functions/getRecommendedMovies?id=${id}`).then(res =>
    dispatch({
      type: GET_RECOMMENDED_MOVIES,
      payload: res.data
    })
  );
};
