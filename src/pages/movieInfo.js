import React, { Component, Fragment } from "react";
import Loading from "../components/loading";
import CastCarousel from "../components/castCarousel";
import SimilarMoviesList from "../components/SimilarMoviesList";

import { connect } from "react-redux";
import { getMovieInfo } from "../actions/movie_actions/movieInfo";
import { getMovieCredits } from "../actions/movie_actions/movieCredits";
import { getSimilarMovies } from "../actions/movie_actions/similarMovies";

class MovieInfo extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovieInfo(movieId);
    this.props.getMovieCredits(movieId);
    this.props.getSimilarMovies(movieId);
  }

  UNSAFE_componentWillReceiveProps(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const newMovieId = prevProps.match.params.id;
      this.props.getMovieInfo(newMovieId);
      this.props.getMovieCredits(newMovieId);
      this.props.getSimilarMovies(newMovieId);
    }
  }

  handleBackBtn = () => {
    this.props.history.goBack();
  };

  render() {
    const { movieInfo } = this.props.movieInfo;
    const { movieCredits } = this.props.movieCredits;
    const { similarMovies } = this.props.similarMovies;
    const { config } = this.props.config;

    const path = config.data.images.secure_base_url;
    const backgroundImgSize = config.data.images.backdrop_sizes[2];
    const posterSize = config.data.images.poster_sizes[1];

    if (
      Object.keys(movieInfo).length === 0 ||
      Object.keys(similarMovies).length === 0
    ) {
      return <Loading />;
    }
    // similar movies
    const movies = similarMovies ? similarMovies.results : "";
    return (
      <Fragment>
        <header className="movie-info-header">
          <img
            style={{ width: "100%" }}
            src={`${path}${backgroundImgSize}${movieInfo.backdrop_path}`}
            alt={movieInfo.title}
          />
          <button onClick={this.handleBackBtn}>
            <i className="fas fa-chevron-left" />
          </button>
        </header>
        <main className="movie-info-main">
          <div className="container">
            <figure className="movie-info-poster">
              <img
                src={`${path}${posterSize}${movieInfo.poster_path}`}
                alt={movieInfo.title}
              />
              <figcaption className="movie-info-details">
                <h2>{movieInfo.title}</h2>
              </figcaption>
            </figure>
            <section className="movie-info-section movie-info-summary">
              <h3>Summary</h3>
              <p>{movieInfo.overview}</p>
            </section>
            <section className="movie-info-section movie-info-cast">
              <CastCarousel
                carouselName="Cast"
                cast={movieCredits}
                config={config}
              />
            </section>
            <section className="movie-info-section">
              <h3>Similar Movies</h3>
              <SimilarMoviesList similarMovies={movies} config={config} />
            </section>
          </div>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieInfo: state.movieInfo,
    movieCredits: state.movieCredits,
    similarMovies: state.similarMovies,
    config: state.config
  };
};

export default connect(
  mapStateToProps,
  {
    getMovieInfo,
    getMovieCredits,
    getSimilarMovies
  }
)(MovieInfo);
