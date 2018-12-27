// THIS FUNCTION ALLOWS US TO GET THE FULL URL PATH TO DISPLAY THE IMAGES
import axios from "axios";

exports.handler = function(event, context, callback) {
  const { API_URL, API_CLIENT_ID } = process.env;

  const URL = `${API_URL}/configuration?api_key=${API_CLIENT_ID}`;

  const getConfig = () => {
    axios
      .get(URL)
      .then(res => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res.data)
        });
      })
      .catch(err => {
        callback(err);
      });
  };
  getConfig();
};
