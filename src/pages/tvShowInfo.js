import React, { Component, Fragment } from "react";
import Loading from "../components/loading";
import CastCarousel from "../components/castCarousel";
import SimilarTvShowsList from "../components/SimilarTvShowsList";

import { connect } from "react-redux";
import { getTvShowInfo } from "../actions/tv_actions/tvShowInfo";
import { getTvShowCredits } from "../actions/tv_actions/tvShowCredits";
import { getSimilarTvShows } from "../actions/tv_actions/similarTvShows";
import { getRecommendedTvShows } from "../actions/tv_actions/recommendedTvShows";
import RecommendedTvShowsList from "../components/RecommendedTvShowsList";

class TvShowInfo extends Component {
  componentDidMount() {
    const tvShowId = this.props.match.params.id;
    this.props.getTvShowInfo(tvShowId);
    this.props.getTvShowCredits(tvShowId);
    this.props.getSimilarTvShows(tvShowId);
    this.props.getRecommendedTvShows(tvShowId);
  }

  UNSAFE_componentWillReceiveProps(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const newTvShowId = prevProps.match.params.id;
      this.props.getTvShowInfo(newTvShowId);
      this.props.getTvShowCredits(newTvShowId);
      this.props.getSimilarTvShows(newTvShowId);
      this.props.getRecommendedTvShows(newTvShowId);
    }
  }

  render() {
    const { tvShowInfo } = this.props.tvShowInfo;
    const { tvShowCredits } = this.props.tvShowCredits;
    const { similarTvShows } = this.props.similarTvShows;
    const { recommendedTvShows } = this.props.recommendedTvShows;
    const { config } = this.props.config;

    const path = config.data.images.secure_base_url;
    const backgroundImgSize = config.data.images.backdrop_sizes[2];
    const posterSize = config.data.images.poster_sizes[1];

    if (
      Object.keys(tvShowInfo).length === 0 ||
      Object.keys(similarTvShows).length === 0 ||
      Object.keys(recommendedTvShows).length === 0
    ) {
      return <Loading />;
    }
    // similar tv shows
    const tvShows = similarTvShows ? similarTvShows.results : "";
    return (
      <Fragment>
        <header className="tv-show-info-header">
          <img
            style={{ width: "100%" }}
            src={`${path}${backgroundImgSize}${tvShowInfo.backdrop_path}`}
            alt={tvShowInfo.name}
          />
        </header>
        <main className="tv-show-info-main">
          <div className="container">
            <figure className="tv-show-info-poster">
              <img
                src={`${path}${posterSize}${tvShowInfo.poster_path}`}
                alt={tvShowInfo.name}
              />
              <figcaption className="tv-show-info-details">
                <h2>{tvShowInfo.name}</h2>
              </figcaption>
            </figure>
            <section className="tv-show-info-section tv-show-info-summary">
              <h3>Summary</h3>
              <p>{tvShowInfo.overview}</p>
            </section>
            <section className="tv-show-info-section tv-show-info-cast">
              <CastCarousel
                carouselName="Cast"
                cast={tvShowCredits}
                config={config}
              />
            </section>
            <section className="tv-show-info-section">
              <h3>Similar Tv Shows</h3>
              <SimilarTvShowsList similarTvShows={tvShows} config={config} />
            </section>
            <section className="tv-show-info-section">
              <h3>Recommended Tv Shows</h3>
              <RecommendedTvShowsList
                recommendedTvShows={recommendedTvShows}
                config={config}
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
    tvShowInfo: state.tvShowInfo,
    tvShowCredits: state.tvShowCredits,
    similarTvShows: state.similarTvShows,
    recommendedTvShows: state.recommendedTvShows,
    config: state.config
  };
};

export default connect(
  mapStateToProps,
  {
    getTvShowInfo,
    getTvShowCredits,
    getSimilarTvShows,
    getRecommendedTvShows
  }
)(TvShowInfo);
