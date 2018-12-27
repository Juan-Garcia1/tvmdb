import React from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

const VerticalMovieCarousel = ({ nowPlaying, config }) => {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1400,
    autoplaySpeed: 6500,
    vertical: true,
    verticalSwiping: true
  };
  const path = config.config.data.images.secure_base_url;
  const imgSize = config.config.data.images.backdrop_sizes[2];
  return (
    <Slider {...settings}>
      {nowPlaying.slice(0, 5).map(movie => (
        <figure key={movie.id} className="v-carousel-item">
          <img
            src={`${path}${imgSize}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Link to={`/movies/details/${movie.id}`}>
            <figcaption>
              <div>
                <div className="container">
                  <h4>Now Playing</h4>
                  <h2>{movie.title}</h2>
                </div>
              </div>
            </figcaption>
          </Link>
        </figure>
      ))}
    </Slider>
  );
};

const mapStateToProps = state => {
  return {
    config: state.config
  };
};

export default connect(mapStateToProps)(VerticalMovieCarousel);
