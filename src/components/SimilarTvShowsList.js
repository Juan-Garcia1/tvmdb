import React from "react";
import { Link } from "react-router-dom";

const SimilarTvShowsList = ({ similarTvShows, config }) => {
  const path = config.data.images.secure_base_url;
  const imgSize = config.data.images.poster_sizes[1];
  return (
    <div className="similar-movies-row">
      {similarTvShows.slice(0, 10).map(tv => (
        <div className="similar-movies-col" key={tv.id}>
          <figure style={{ marginBottom: "15px" }}>
            <Link to={`/tv/details/${tv.id}`}>
              <img
                style={{ display: "block", margin: "auto" }}
                src={`${path}${imgSize}${tv.poster_path}`}
                alt={tv.name}
              />
            </Link>
            <figcaption>
              <h5
                style={{
                  textAlign: "center",
                  color: "#626977",
                  marginTop: "5px"
                }}
                className="truncate"
              >
                {tv.name}
              </h5>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default SimilarTvShowsList;
