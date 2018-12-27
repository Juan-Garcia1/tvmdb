import axios from "axios";
import { GET_NOW_PLAYING } from "../types";

export const getNowPlaying = () => dispatch => {
  axios.get("/.netlify/functions/getNowPlaying").then(res =>
    dispatch({
      type: GET_NOW_PLAYING,
      payload: res.data.results
    })
  );
};
