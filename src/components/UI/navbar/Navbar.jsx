import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="navbar__links">
        <Link to="/about">About the app</Link>
        <Link to="/posts">Posts</Link>
      </section>
    </nav>
  );
};

export default Navbar;
