import React from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

const VerticalTvShowCarousel = ({ airingToday, config }) => {
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
      {airingToday &&
        airingToday.results.slice(0, 5).map(tv => (
          <figure key={tv.id} className="v-carousel-item">
            <img src={`${path}${imgSize}${tv.backdrop_path}`} alt={tv.name} />
            <Link to={`/tv/details/${tv.id}`}>
              <figcaption>
                <div>
                  <div className="container">
                    <h4>Airing Today</h4>
                    <h2>{tv.name}</h2>
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

export default connect(mapStateToProps)(VerticalTvShowCarousel);
