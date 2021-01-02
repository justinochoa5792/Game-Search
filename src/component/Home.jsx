import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Search and compare games from yesterday and today!</h2>
      <Link className="link" to="/search">
        Search
      </Link>
      <Link className="link" to="/filtered">
        Filtered
      </Link>
    </div>
  );
};

export default Home;
