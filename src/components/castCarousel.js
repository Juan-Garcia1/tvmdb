import React, { Fragment } from "react";
import Slider from "react-slick";
// import { Link } from "react-router-dom";

const CastCarousel = ({ carouselName, config, cast }) => {
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
  const path = config.data.images.secure_base_url;
  const imgSize = config.data.images.profile_sizes[1];

  return (
    <Fragment>
      <h3 className="carousel-name">{carouselName}</h3>
      <Slider {...settings}>
        {cast.cast &&
          cast.cast.slice(0, 10).map(c => (
            <figure key={c.id} className="h-carousel-item">
              {/* <Link to={`/details/${movie.id}`}> */}
              <img src={`${path}${imgSize}${c.profile_path}`} alt={c.name} />
              {/* </Link> */}
              <figcaption>
                <h5>{c.name}</h5>
              </figcaption>
            </figure>
          ))}
      </Slider>
    </Fragment>
  );
};

export default CastCarousel;
