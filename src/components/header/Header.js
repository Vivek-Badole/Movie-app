import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Hhead">
      <div className="hleft">
        <Link to="/">
          <img
            className="hicon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDgw7eNHzbkY7i3axOWVI9U6u5EgJHhQk3Q&usqp=CAU"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
