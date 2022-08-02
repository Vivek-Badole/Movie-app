import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";

const Home = () => {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((r) => r.json())
      .then((data) => setPopMovies(data.results));
  }, []);

  return (
    <>
      <div className="po">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popMovies.map((m) => (
            <Link
            key={m.id} style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${m.id}`}
            >
              <div className="pi">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    m && m.backdrop_path
                  }`}
                  alt=""
                />
              </div>
              <div className="pi_ol">
                <div className="pi_t">{m ? m.original_title : ""}</div>
                <div className="pi_rt">
                  {m ? m.release_date : ""}
                  <span className="pi_r">
                    {m ? m.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="pi_d">{m ? m.overview : ""}</div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
