import axios from "axios";
import { GET_POPULAR_MOVIES } from "../types";

export const getPopularMovies = () => dispatch => {
  axios.get("/.netlify/functions/getPopularMovies").then(res =>
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: res.data.results
    })
  );
};
