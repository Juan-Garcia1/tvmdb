import React, { Fragment } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const HorizontalMovieCarousel = ({ carouselName, config, movies }) => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 9,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  const path = config.config.data.images.secure_base_url;
  const imgSize = config.config.data.images.poster_sizes[1];
  return (
    <Fragment>
      <h3 className="carousel-name">{carouselName}</h3>
      <Slider {...settings}>
        {movies &&
          movies.map(movie => (
            <figure key={movie.id} className="h-carousel-item">
              <Link to={`/movies/details/${movie.id}`}>
                <img
                  src={`${path}${imgSize}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <figcaption>
                <h5 className="truncate truncate-small">{movie.title}</h5>
              </figcaption>
            </figure>
          ))}
      </Slider>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    config: state.config
  };
};

export default connect(mapStateToProps)(HorizontalMovieCarousel);
