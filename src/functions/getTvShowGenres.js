import axios from "axios"

exports.handler = function (event, context, callback) {
  const { API_URL, API_CLIENT_ID } = process.env;

  const URL = `${API_URL}/genre/tv/list?api_key=${API_CLIENT_ID}`;

  const getTvShowGenres = () => {
    axios.get(URL)
      .then(res => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res.data)
        })
      })
      .catch(err => {
        callback(err)
      })
  }
  getTvShowGenres();
}