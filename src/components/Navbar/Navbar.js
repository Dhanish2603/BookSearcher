import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
    <nav className="bg-info">
      <div className="container ">
        <div className="logo">
          <a href=""> BookSearcher</a>
        </div>
        <div className="right">
          <a href="">Home</a>
          <a href="">About Us</a>
        </div>
      </div>
    </nav>
    <h1 className="d-flex justify-content-center secondary ">Welcome to Book Searcher Library</h1>
    </div>
  );
}

export default Navbar;
