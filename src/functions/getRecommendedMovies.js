import axios from "axios";

exports.handler = function(event, context, callback) {
  const { API_URL, API_CLIENT_ID } = process.env;

  const { id } = event.queryStringParameters;

  const URL = `${API_URL}/movie/${id}/recommendations?api_key=${API_CLIENT_ID}&language=en-US&page=1`;

  const getRecommendedMovies = () => {
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
  getRecommendedMovies();
};
