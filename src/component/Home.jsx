import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Hello From Home</h1>
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
