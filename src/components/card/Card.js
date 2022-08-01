import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ m }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="c">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`movie/${m.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <img
            className="c_i"
            src={`https://image.tmdb.org/t/p/original${m ? m.poster_path : ""}`}
            alt="image"
          />
          <div className="c_ol">
            <div className="c_t">{m ? m.original_title : ""} </div>
            <div className="c_rt">
              {m ? m.release_date : ""}
              <span className="c_r">
                {m ? m.vote_average : ""}
                <i className="fas fa-star" />
              </span>
              <div className="c_d">
                {m ? m.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
