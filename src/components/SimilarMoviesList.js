import React from "react";
import { Link } from "react-router-dom";

const SimilarMoviesList = ({ similarMovies, config }) => {
  const path = config.data.images.secure_base_url;
  const imgSize = config.data.images.poster_sizes[1];
  return (
    <div className="similar-movies-row">
      {similarMovies.slice(0, 10).map(m => (
        <div className="similar-movies-col" key={m.id}>
          <figure style={{ marginBottom: "15px" }}>
            <Link to={`/movies/details/${m.id}`}>
              <img
                style={{ display: "block", margin: "auto" }}
                src={`${path}${imgSize}${m.poster_path}`}
                alt={m.title}
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
                {m.title}
              </h5>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default SimilarMoviesList;
