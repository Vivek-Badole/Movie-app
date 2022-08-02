import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ( {movie} ) => {
  
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  

  return <>
      {loading ? 
        <div className="c">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
       : 
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }} >
          <div className="c">
          <img
            className="c_i"
            src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path : ""}`}
            alt=""
          />
          <div className="c_ol">
            <div className="c_t">{movie?movie.original_title : ""} </div>
            <div className="c_rt">
              {movie?movie.release_date : ""}
              <span className="c_r">
                {movie?movie.vote_average : ""}
                <i className="fas fa-star" />
              </span>
              <div className="c_d">
                {movie?movie.overview.slice(0,118)+"..." : ""}
              </div>
            </div>
          </div>
          </div>
        </Link>
      }
    </>
  
};

export default Card;
