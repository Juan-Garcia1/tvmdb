import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getTvShowsAiringToday } from "../actions/tv_actions/tvShowsAiringToday";
import { getPopularTvShows } from "../actions/tv_actions/popularTvShows";
import { getTopRatedTvShows } from "../actions/tv_actions/topRatedTvShows";
import { getTvShowGenres } from "../actions/tv_actions/tvShowGenres";

import Loading from "../components/loading";
import VerticalTvShowCarousel from "../components/VerticalTvShowCarousel";
import HorizontalTvShowCarousel from "../components/HorizontalTvShowCarousel";

class Tv extends Component {
  componentDidMount() {
    this.props.getTvShowsAiringToday();
    this.props.getPopularTvShows();
    this.props.getTopRatedTvShows();
    this.props.getTvShowGenres();
  }
  render() {
    const { tvShowsAiringToday } = this.props.tvShowsAiringToday;
    const { popularTvShows } = this.props.popularTvShows;
    const { topRatedTvShows } = this.props.topRatedTvShows;
    const { tvShowGenres } = this.props.tvShowGenres
    if (
      Object.keys(tvShowsAiringToday).length === 0 ||
      Object.keys(popularTvShows).length === 0 ||
      Object.keys(topRatedTvShows).length === 0
    ) {
      return <Loading name="Tv Shows" />;
    }
    if (Object.keys(tvShowGenres).length === 0) {
      return <Loading name="Tv Shows" />
    }
    return (
      <Fragment>
        <header className="main-header">
          <VerticalTvShowCarousel airingToday={tvShowsAiringToday} genres={tvShowGenres} />
        </header>
        <main className="main-tv-show">
          <div className="container">
            <section>
              <HorizontalTvShowCarousel
                carouselName="Popular"
                tvShows={popularTvShows}
              />
            </section>
            <section>
              <HorizontalTvShowCarousel
                carouselName="Top Rated"
                tvShows={topRatedTvShows}
              />
            </section>
            <section>
              <HorizontalTvShowCarousel
                carouselName="Airing Today"
                tvShows={tvShowsAiringToday}
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
    tvShowsAiringToday: state.tvShowsAiringToday,
    popularTvShows: state.popularTvShows,
    topRatedTvShows: state.topRatedTvShows,
    tvShowGenres: state.tvShowGenres
  };
};

export default connect(
  mapStateToProps,
  {
    getTvShowsAiringToday,
    getPopularTvShows,
    getTopRatedTvShows,
    getTvShowGenres
  }
)(Tv);
