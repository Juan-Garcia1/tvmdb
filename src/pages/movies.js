import React, { Component, Fragment } from "react";
import Loading from "../components/loading";

import { connect } from "react-redux";
import { getNowPlaying } from "../actions/movie_actions/nowPlaying";
import { getPopularMovies } from "../actions/movie_actions/popularMovies";
import { getTopRatedMovies } from "../actions/movie_actions/topRatedMovies";
import { getUpComingMovies } from "../actions/movie_actions/upComingMovies";

import VerticalMovieCarousel from "../components/VerticalMovieCarousel";
import HorizontalMovieCarousel from "../components/HorizontalMovieCarousel";

class Movies extends Component {
  componentDidMount() {
    this.props.getNowPlaying();
    this.props.getPopularMovies();
    this.props.getTopRatedMovies();
    this.props.getUpComingMovies();
  }
  render() {
    const { nowPlaying } = this.props.nowPlaying;
    const { popularMovies } = this.props.popularMovies;
    const { topRatedMovies } = this.props.topRatedMovies;
    const { upComingMovies } = this.props.upComingMovies;

    if (
      !popularMovies.length &&
      !nowPlaying.length &&
      !topRatedMovies.length &&
      !upComingMovies.length
    ) {
      return <Loading name="Movies" />;
    }
    return (
      <Fragment>
        <header className="main-header">
          <VerticalMovieCarousel nowPlaying={nowPlaying} />
        </header>
        <main className="main-movie">
          <div className="container">
            <section>
              <HorizontalMovieCarousel
                carouselName="Popular"
                movies={popularMovies}
              />
            </section>
            <section>
              <HorizontalMovieCarousel
                carouselName="Top Rated"
                movies={topRatedMovies}
              />
            </section>
            <section>
              <HorizontalMovieCarousel
                carouselName="Upcoming"
                movies={upComingMovies}
              />
            </section>
          </div>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying,
    popularMovies: state.popularMovies,
    topRatedMovies: state.topRatedMovies,
    upComingMovies: state.upComingMovies
  };
};

export default connect(
  mapStateToProps,
  { getNowPlaying, getPopularMovies, getTopRatedMovies, getUpComingMovies }
)(Movies);
