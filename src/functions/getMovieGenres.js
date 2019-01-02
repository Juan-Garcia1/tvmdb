import axios from "axios";

exports.handler = function (event, context, callback) {
  // const { API_URL, API_CLIENT_ID } = process.env;
  const API_URL = "https://api.themoviedb.org/3"
  const API_CLIENT_ID = "12a5356516535d4d67654a936a088c1b"

  const URL = `${API_URL}/genre/movie/list?api_key=${API_CLIENT_ID}`;

  const getMovieGenres = () => {
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
  getMovieGenres();
}