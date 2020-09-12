import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//A href tag usually refreshes the page every time but to avoid it we can use Link from the react-router
const Navbar = ({ icon, title }) => {
  //Static props is given by static defaultProps as demonstated below
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
