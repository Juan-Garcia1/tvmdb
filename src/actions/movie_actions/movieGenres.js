import axios from "axios";
import { GET_MOVIE_GENRES } from '../types';

export const getMovieGenres = () => dispatch => {
  axios.get("/.netlify/functions/getMovieGenres")
    .then(res =>
      dispatch({
        type: GET_MOVIE_GENRES,
        payload: res.data
      })
    )
}