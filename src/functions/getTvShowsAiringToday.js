import axios from "axios";

exports.handler = function(event, context, callback) {
  const { API_URL, API_CLIENT_ID } = process.env;

  const URL = `${API_URL}/tv/airing_today?api_key=${API_CLIENT_ID}&page=1`;

  const getTvShowsAiringToday = () => {
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
  getTvShowsAiringToday();
};
