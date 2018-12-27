import axios from "axios";

import { GET_TV_SHOW_INFO } from "../types";

export const getTvShowInfo = id => dispatch => {
  axios.get(`/.netlify/functions/getTvShowInfo?id=${id}`).then(res =>
    dispatch({
      type: GET_TV_SHOW_INFO,
      payload: res.data
    })
  );
};
