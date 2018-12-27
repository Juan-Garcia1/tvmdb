import axios from "axios";
import { GET_CONFIG } from "./types";

export const getApiConfig = () => dispatch => {
  axios.get("/.netlify/functions/getConfig").then(res =>
    dispatch({
      type: GET_CONFIG,
      payload: res
    })
  );
};
