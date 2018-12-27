import axios from "axios";
import { GET_MOVIE_INFO } from "../types";

export const getMovieInfo = id => dispatch => {
  axios.get(`/.netlify/functions/getMovieInfo?id=${id}`).then(res =>
    dispatch({
      type: GET_MOVIE_INFO,
      payload: res.data
    })
  );
};
