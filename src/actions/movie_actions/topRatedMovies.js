import axios from "axios";
import { GET_TOP_RATED_MOVIES } from "../types";

export const getTopRatedMovies = () => dispatch => {
  axios.get("/.netlify/functions/getTopRatedMovies").then(res =>
    dispatch({
      type: GET_TOP_RATED_MOVIES,
      payload: res.data.results
    })
  );
};
