import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Card from "../card/Card";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((r) => r.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div className="ml">
      <h2 className="l_t">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="l_c">
        {movies.map((mo) => {
          <Card mo={mo} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
