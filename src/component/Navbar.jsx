import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h1>Video Game SuperStore!</h1>
      <div className="nav-link">
        <i className="fas fa-backward">
          <Link style={{ color: "white" }} className="link" to="/">
            Home
          </Link>
        </i>
      </div>
    </div>
  );
};

export default Navbar;
