import React from "react";

const Navbar = ({ movieNum }) => {
  return (
    <nav className="navbar navbar-light">
      <span className="navbar-brand mb-0 h1">
        {movieNum ? `Showing ${movieNum} ` : "There are no"} movies in the
        database
      </span>
    </nav>
  );
};

export default Navbar;
