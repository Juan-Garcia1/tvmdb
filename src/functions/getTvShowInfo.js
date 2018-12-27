// GET TV SHOW INFO BY ID
import axios from "axios";

exports.handler = function(event, context, callback) {
  const { API_URL, API_CLIENT_ID } = process.env;
  const { id } = event.queryStringParameters;
  const URL = `${API_URL}/tv/${id}?api_key=${API_CLIENT_ID}`;

  const getTvShowInfo = () => {
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
  getTvShowInfo();
};
