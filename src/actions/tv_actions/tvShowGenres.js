import axios from "axios";
import { GET_TV_SHOW_GENRES } from "../types";

export const getTvShowGenres = () => dispatch => {
  axios.get("/.netlify/functions/getTvShowGenres")
    .then(res =>
      dispatch({
        type: GET_TV_SHOW_GENRES,
        payload: res.data
      })
    )
}