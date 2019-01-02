import React from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

const VerticalMovieCarousel = ({ nowPlaying, config, genres }) => {
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

                  {
                    movie.genre_ids.map(genreId =>
                      genres.genres.filter(genre => genre.id === genreId)
                        .map(genre => genre.name)
                    )
                      .reduce((prev, next) => prev.concat(next))
                      .slice(0, 3)
                      .map((genre, i) => <span key={i}>{genre}</span>)
                  }

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
