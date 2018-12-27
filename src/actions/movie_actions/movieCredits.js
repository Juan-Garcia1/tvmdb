import axios from "axios";

import { GET_MOVIE_CREDITS } from "../types";

export const getMovieCredits = id => dispatch => {
  axios.get(`/.netlify/functions/getMovieCredits?id=${id}`).then(res =>
    dispatch({
      type: GET_MOVIE_CREDITS,
      payload: res.data
    })
  );
};
