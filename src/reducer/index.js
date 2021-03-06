import { combineReducers } from "redux";

import nowPlayingReducer from "./movie_reducers/nowPlaying";
import popularMoviesReducer from "./movie_reducers/popularMovies";
import topRatedMoviesReducer from "./movie_reducers/topRatedMovies";
import upComingMoviesReducer from "./movie_reducers/upComingMovies";
import movieInfoReducer from "./movie_reducers/movieInfo";
import movieCreditsReducer from "./movie_reducers/movieCredits";
import similarMoviesReducer from "./movie_reducers/similarMovies";
import movieGenresReducer from "./movie_reducers/movieGenres";
import recommendedMoviesReducer from "./movie_reducers/recommendedMovies";

import topRatedTvShowsReducer from "./tv_reducers/topRatedTvShows";
import tvShowsAiringTodayReducer from "./tv_reducers/tvShowsAiringToday";
import popularTvShowsReducer from "./tv_reducers/popularTvShows";
import tvShowInfoReducer from "./tv_reducers/tvShowInfo";
import tvShowCreditsReducer from "./tv_reducers/tvShowCredits";
import similarTvShowsReducer from "./tv_reducers/similarTvShows";
import tvShowGenresReducer from "./tv_reducers/tvShowGenres";
import recommendedTvShowsReducer from "./tv_reducers/recommendedTvShows";

import configReducer from "./configReducer";

export default combineReducers({
  nowPlaying: nowPlayingReducer,
  popularMovies: popularMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  upComingMovies: upComingMoviesReducer,
  movieInfo: movieInfoReducer,
  movieCredits: movieCreditsReducer,
  similarMovies: similarMoviesReducer,
  movieGenres: movieGenresReducer,
  recommendedMovies: recommendedMoviesReducer,
  topRatedTvShows: topRatedTvShowsReducer,
  tvShowsAiringToday: tvShowsAiringTodayReducer,
  popularTvShows: popularTvShowsReducer,
  tvShowInfo: tvShowInfoReducer,
  tvShowCredits: tvShowCreditsReducer,
  similarTvShows: similarTvShowsReducer,
  tvShowGenres: tvShowGenresReducer,
  recommendedTvShows: recommendedTvShowsReducer,
  config: configReducer
});
