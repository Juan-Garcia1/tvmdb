import axios from "axios";
import { GET_UPCOMING_MOVIES } from "../types";

export const getUpComingMovies = () => dispatch => {
  axios.get("/.netlify/functions/getUpComingMovies").then(res =>
    dispatch({
      type: GET_UPCOMING_MOVIES,
      payload: res.data.results
    })
  );
};
